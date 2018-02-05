import sidebar from './sidebar';

export default app => {
    app.use('/sidebar', sidebar);
}