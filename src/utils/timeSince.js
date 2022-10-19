const timeSince = (date) => {

    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = seconds / 31536000;
    let time;

    if (interval > 1) {
        time = Math.floor(interval);
        return `Hace ${time} ${time === 1 ? 'año' : 'años'}`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        time = Math.floor(interval);
        return `Hace ${time} ${time === 1 ? 'mes' : 'meses'}`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
        time = Math.floor(interval);
        return `Hace ${time} ${time === 1 ? 'hora' : 'horas'}`;
    }
    interval = seconds / 3600;
    if (interval > 1) {
        time = Math.floor(interval);
        return `Hace ${time} ${time === 1 ? 'día' : 'días'}`;
    }
    interval = seconds / 60;
    if (interval > 1) {
        time = Math.floor(interval);
        return `Hace ${time} ${time === 1 ? 'minuto' : 'minutos'}`;
    }
    return `Hace ${Math.floor(seconds)} segundos`;
}

export default timeSince;