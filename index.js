var blessed = require('blessed');
var screen = blessed.screen({
    smartCSR: true
  });
  
  screen.title = 'my window title';
  var box = blessed.box({
    top: 'center',
    left: 'center',
    width: '50%',
    height: '50%',
    content: 'Hello {bold}world{/bold}!',
    tags: true,
    border: {
      type: 'line'
    },
    style: {
      fg: 'white',
      bg: 'magenta',
      border: {
        fg: '#f0f0f0'
      },
      hover: {
        bg: 'green'
      }
    }
  });
  screen.append(box)
  screen.key([ 'C-c'], function(ch, key) {
    return process.exit(0);
  });
  screen.render()
