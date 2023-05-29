import app, { init } from "./app";

const PORT = process.env.PORT || 5000;

init().then(() => {
    app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`Server is listening on port ${PORT}`);
      });
})
