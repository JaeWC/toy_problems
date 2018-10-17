$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var createSpan = () => {
    $('p').each((idx, elem) => {
      let splitted =  $(elem).html().split(' ')
      let array = splitted.map(elem => `<span>${elem}</span>`)

      $('p').html(array.join(' '))
    })
  }

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  var changeColor = () => {

    $('span').each((idx, elem) => {
      const r = Math.floor( Math.random() * 255 );
      const g = Math.floor( Math.random() * 255 );
      const b = Math.floor( Math.random() * 255 );

      $(elem).css('color', `rgb(${r}, ${g}, ${b})` );
    });
  };

  createSpan();

  setInterval(changeColor, 1000)
});