import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useBlocker from "./useBlock";

const useCallbackPrompt = (when) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showPrompt, setShowPrompt] = useState(false);
    const [lastLocation, setLastLocation] = useState(null);
    const [confirmExit, setConfirmExit] = useState(false);

    const cancelNavigation = useCallback(() => {
        setShowPrompt(false);
    }, [])

    const handleBlockeNavigation = useCallback((nextLocation) => {
        if (!confirmExit && nextLocation.location.pathname !== location.pathname) {
            setShowPrompt(true);
            setLastLocation(nextLocation);
            return false;
        }
        return true;
    }, [confirmExit])

    const confirmNavigation = useCallback(() => {
        setShowPrompt(false);
        setConfirmExit(true);
    }, [])

    useEffect(() => {
        if (confirmExit && lastLocation) {
            navigate(lastLocation.location.pathname);
        }
    }, [confirmExit, lastLocation])

    useBlocker(handleBlockeNavigation, when);

    return [showPrompt, confirmNavigation, cancelNavigation]
}

export default useCallbackPrompt;