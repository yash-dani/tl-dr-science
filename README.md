# tl;dr papers

Science abstract a second grader can understand. Built using GPT-3.

------

[![MIT License](https://camo.githubusercontent.com/df844ea7a369be75edbd0d3017f8f7406c1fa62d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f67656e657261746f722d6b63642d6f73732e7376673f7374796c653d666c61742d737175617265)](https://github.com/kentcdodds/generator-kcd-oss/blob/master/LICENSE) [![All Contributors](https://camo.githubusercontent.com/fefd1735a0d93ef4f2e93eaafe52dfb1e49ef56c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f616c6c5f636f6e7472696275746f72732d332d6f72616e67652e7376673f7374796c653d666c61742d737175617265)](https://github.com/kentcdodds/generator-kcd-oss/blob/master/README.md#contributors-) [![PRs Welcome](https://camo.githubusercontent.com/a34cfbf37ba6848362bf2bee0f3915c2e38b1cc1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)](http://makeapullrequest.com/) [![Code of Conduct](https://camo.githubusercontent.com/6e9ccd97d0b5a39067b7fbe5f903b733f4f8eba2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64652532306f662d636f6e647563742d6666363962342e7376673f7374796c653d666c61742d737175617265)](https://github.com/kentcdodds/generator-kcd-oss/blob/master/other/CODE_OF_CONDUCT.md)

## About

This is a Flask app that uses openAI's GPT-3 in order to resummarize abstracts using second grade language.

## Table of Contents

- Installation
  - [Try Without Installing](https://github.com/yash-dani/readme/README.md#try-without-installing)
- [Usage](https://github.com/yash-dani/readme/README.md#usage)
- Issues
  - [🐛 Bugs](https://github.com/yash-dani/readme/README.md#-bugs)
  - [💡 Feature Requests](https://github.com/yash-dani/tldr_papers/master/README.md#-feature-requests)
- [Contributors ✨](https://github.com/kentcdodds/generator-kcd-oss/blob/master/README.md#contributors-)
- [LICENSE](https://github.com/kentcdodds/generator-kcd-oss/blob/master/README.md#license)

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

MIT

<details class="details-reset details-overlay details-overlay-dark" id="jumpto-line-details-dialog" style="box-sizing: border-box; display: block;"><summary data-hotkey="l" aria-label="Jump to line" role="button" style="box-sizing: border-box; display: list-item; cursor: pointer; list-style: none;"></summary></details>