<div>
  <h1 align="center">inputio</h1>
  <h4 align="center">Utilities for `stdin` for NodeJS CLI Applications</h4>
</div>

<div align="center">
 <img src="https://user-images.githubusercontent.com/34756077/187345976-a9afada5-b851-454b-a393-955664271638.gif" />
</div>

## Getting Started

```bash
npm install @whizzes/inputio
```

## Usage

```javascript
import { input } from '@whizzes/inputio';

async function main() {
  const reply = await input("Enter your name: ");

  console.log(reply);
}
```

## Contributions

Every contribution to this project is welcome, feel free to open PRs and issues
if you find fit for any.

## License

Licensed under the MIT license. Refer to the `LICENSE` file.
