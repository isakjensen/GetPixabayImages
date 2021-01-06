# GetPixabayImages
Get the latest X images from Pixabay.com

### Installation
- Run `npm i empty-folder node-fetch sharp`.
- Visit [Pixabay](https://pixabay.com) and create an account.
- Login to your account and visit [Pixabay's API Documentation](https://pixabay.com/api/docs/), scroll down and grab your API key.
- Open `app.js` and replace `YOUR_PIXABAY_API_TOKEN` with your Pixabay API key.
- Create a folder called `generated` in the same folder as `app.js`.

### Usage
- Change the values in the `url` variable to match your desires.
- You can check out [Pixabay's API Documentation](https://pixabay.com/api/docs/) for more information about the url query parameters.
- Run `node app.js` to start gettting images from [Pixabay](https://pixabay.com).

### How it works
- It makes an request to [Pixabay](https://pixabay.com)'s API.
- We get the image link to the image then we use [sharp](https://www.npmjs.com/package/sharp) to resize the image and save it inside our desired folder.

### Notes
- You can make up to **5.000** requests per hour to [Pixabay](https://pixabay.com)'s API. They are limiting the API key, not the IP Address. Read more at [Pixabay's API Documentation](https://pixabay.com/api/docs/).
