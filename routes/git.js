import sidebar from './sidebar';
import git from './git';

export default app => {
    app.use('/sidebar', sidebar);
    app.use('git', git);
}