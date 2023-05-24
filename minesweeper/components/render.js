export default class Render {
    renderPage() {
        appRender()
    }
}

function appRender() {
    const BODY = document.querySelector('body');

    const header = document.createElement('div');
    header.classList.add('header');

    const themesDiv = document.createElement('div');
    themesDiv.classList.add('themes')
    themesDiv.innerHTML = `
    <label><input type="radio" name="theme" value="light" class="theme__input">Light</label>
    <label><input type="radio" name="theme" value="dark" class="theme__input" >Dark</label>
    `

    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.innerHTML = `MINESWEEPER`;

    const timer = document.createElement('div');
    timer.classList.add('stopwatch');
    const minutes = document.createElement('span')
    minutes.classList.add('stopwatch__minutes')
    minutes.textContent = `00`;
    const divider = document.createElement('span')
    divider.textContent = `:`;
    const seconds = document.createElement('span')
    seconds.classList.add('stopwatch__seconds')
    seconds.textContent = `00`;
    const divider_ = document.createElement('span')
    divider_.textContent = `:`;
    const milliseconds = document.createElement('span')
    milliseconds.classList.add('stopwatch__milliseconds')
    milliseconds.textContent = `00`;
    timer.append(minutes)
    timer.append(divider)
    timer.append(seconds)
    timer.append(divider_)
    timer.append(milliseconds)

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper')
    const clicks = document.createElement('div');
    clicks.classList.add('clicks');
    clicks.innerHTML = `<span class=""clicker>Clicks</span>`;
    const clicksAmount=document.createElement('div')
    clicksAmount.classList.add('clicks__amount')

    const flags = document.createElement('div');
    flags.classList.add('flags');
    flags.innerHTML = `<span class=""clicker>Flags</span>`;
    const flagsLeft=document.createElement('div')
    flagsLeft.classList.add('flags__left')
    flagsLeft.innerHTML=`10`

    const newGameBtn = document.createElement('button');
    newGameBtn.classList.add('btn');
    newGameBtn.setAttribute('id','start');
    newGameBtn.innerHTML = `New game`;

    const result = document.createElement('h2');
    result.classList.add('result');
    result.innerHTML = ``;

    const gameboard = document.createElement('div');
    gameboard.classList.add('grid');

    BODY.prepend(header);
    header.append(themesDiv);
    header.append(heading);
    header.append(timer);
    header.append(wrapper)

    wrapper.append(clicks);
    clicks.append(clicksAmount);
    wrapper.append(flags);
    flags.append(flagsLeft)
    header.append(newGameBtn);
    BODY.append(gameboard);
    BODY.append(result);
}

