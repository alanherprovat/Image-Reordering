## Image-Reordering

I've created a responsive image gallery using React JS with the following features: reordering, deleting multiple images, and setting a feature image. The gallery is quite visually appealing and provide a seamless user experience.

## Functionalities:

1. **Gallery Layout:**
   - Implemented a grid layout for the image gallery.
   - The gallery display images with one feature image larger than the others.
2. **Sorting:**
   - Enabled reordering functionality to allow users to rearrange the order of images in the gallery.
   - Implemented drag-and-drop functionality using React-DnD.
3. **Deleting Multiple Images:**
   - Allows users to select multiple images and delete them.
   - Provides a clear visual indication of selected images.
4. **Setting Feature Image:**
   - Allows users to set a feature image by sorting.
   - Assumptions are made such that first image (from the LTR direction) as the featured image
   - The feature image is visually distinct from the other images with a blue border wrapping the grid.
5. **User Experience:**
   - A smooth and responsive user experience is ensured.
   - Implemented transitions/animations for a polished look and feel.
6. **Live Demo:**
   - After completing Production build, project is being deployed at [Netlify](https://reodering-image-gallery-react-dnd.netlify.app/).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to Clone the Project
Here is a step-by-step guide on how to clone a project from GitHub:

1. **Find the Repository**: Log in to your GitHub account and find the repository you want to clone.
2. **Copy the URL**: On the master page of the repository, click on the `Code` button. You will see an option to clone. Copy the URL.
3. **Open Terminal**: Depending on your system, you'll use Terminal (with Mac) or Command line (with Windows git bash) to move it to your local directory.
4. **Change Directory**: Change the current working directory to the location where you want the cloned directory.
5. **Clone the Repository**: Type `git clone`, and then paste the URL you copied earlier. Press Enter to create your local clone. The command will look something like this:
    ```
    git clone https://github.com/alanherprovat/Image-Reordering.git
    ```
6. **Check the Directory**: You should see a folder that just being clonned to your local directory.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
