export const l = (param:any) => {
    let isDevelopment = process.env.NODE_ENV === 'development';

    if(isDevelopment) {
        let currentdate = new Date();

        let currentTime = currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();

        let dateTime = " " + currentTime + " " + currentdate.getFullYear() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getDate();

        console.log('-------------------------------------------DUMP START ' + dateTime + ' -------------------------------------------------');
        console.table(param);
        console.trace(param);
        console.log('-------------------------------------------DUMP END ' + dateTime + '-------------------------------------------------');
    }
};