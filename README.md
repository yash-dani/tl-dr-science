# tl;dr papers

Science abstract a second grader can understand. Built using GPT-3.

![Demo](https://github.com/yash-dani/tldr_papers/blob/master/cutdog.gif)
------

[![MIT License](https://camo.githubusercontent.com/df844ea7a369be75edbd0d3017f8f7406c1fa62d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f67656e657261746f722d6b63642d6f73732e7376673f7374796c653d666c61742d737175617265)](https://github.com/kentcdodds/generator-kcd-oss/blob/master/LICENSE)  [![PRs Welcome](https://camo.githubusercontent.com/a34cfbf37ba6848362bf2bee0f3915c2e38b1cc1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)](http://makeapullrequest.com/) 

## About

This is a Flask app that uses openAI's GPT-3 in order to resummarize abstracts using second grade language.

## Table of Contents

- Installation
  - [Try Without Installing](#try-without-installing)
- [Usage](#usage)
- Issues
  - [🐛 Bugs](#-bugs)
  - [💡 Feature Requests](#-feature-requests)
- [Contributors ✨](#contributors)
- [LICENSE](#license)

## Installation

**Install required modules. Requires Python 3.5 or later.**

```
pip install -r requirements.txt
```

**Setup your GPT-3 API key and Google ReCaptcha key.** 

**Windows**

```
$Env: api_key=${YOUR_OPENAI_KEY}
$Env: secret_key=${YOUR_RECAPTCHA_SECRET_KEY}
```

**Macintosh**

```
export api_key=${YOUR_OPENAI_KEY}
export secret_key=${YOUR_RECAPTCHA_SECRET_KEY}
```

### Try Without Installing

[tldrpapers.com](https://tldrpapers.com)

## Usage

**Development Server**

```
FLASK_APP=main.py FLASK_ENV=development flask run --port 8080
```

## Issues

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**](https://github.com/yash-dani/tldr_papers/issues?utf8=✓&q=is%3Aissue+is%3Aopen+sort%3Acreated-desc+label%3Abug)

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**](https://github.com/yash-dani/tldr_papers/issues?utf8=✓&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement)

## Contributors ✨

Thanks goes to these people:

* [Yash Dani](https://yashdani.me)
* [Cindy Wu](https://cindywu.org)

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## LICENSE

[MIT](LICENSE)
