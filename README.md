# Spotify Radio Wrapper Project (TechX)

This application will allow users to listen to a Spotify radio generated from their previously played music.

## Installation

Make sure you installed the Node LTS. Next, clone this repository.

To set up the project, install the packages in the client directory.

```bash
npm install
```

Then, navigate to the api directory. There, create a python virtual environment (ensure you have Python installed first).

```bash
python -m venv venv
```

Then, activate the virtual environment.

```bash
source venv/bin/activate
```

Then, install the python packages.

```bash
pip install -r requirements.txt
```

## Usage

To view the frontend, navigate to the client directory and run:

```bash
npm run start
```

To enable the backend so that the frontend can fetch information, navigate to the api directory and run:

```bash
uvicorn main:app --reload
```

## Contributing

You can attempt to stage and commit your files to the dev branch. All commit messages should be in the form of `<type>(<scope>): <message>`. Please refer to [this](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) for more detailed information.

For any large changes, please send a pull request.
