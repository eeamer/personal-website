import React from 'react';
import './App.css';
import Dog from './Dog.js'

function App() {

  var name = "Eleanor"

  var component = name === "Eleanor"
  ? <p>My name is Eleanor.</p>
  : <p>Your name isn't Eleanor.</p>

  var buttonFunction = () => {
    console.log("I am the button function");
  }

  var onChangeFunction = (event) => {
    console.log(event.target.value);
  }

  var rose = {
    name: "Rose",
    age: 11
  }

  var sally = {
    name: "Sally",
    age: 13
  }

  var louise = {
    name: "Louise",
    age: 17
  }

  var jake = {
    name: "Jake",
    age: 21
  }

  var siblingList = [rose, sally, louise, jake];

  var siblingMap = siblingList.map(
    (sibling) => {
      return <p className="siblingNames"> {sibling.name} is {sibling.age} years old.</p>
    }
  )
  
  return (
    <div className='fullPage'>
      <head>
        <title>Eleanor's COVIDiaries!</title>
      </head>
      <body>
        <h1>Eleanor's COVIDiaries</h1>

        {component}

        <p>Welcome to my COVIDiaries! This is a website documenting my experience stuck at home and trying to make the most of it.</p>        
        
        <h2>Where I Am and Who I'm With</h2>
        <p>I am located in the town of Belmont, Massachusetts (Just Outside of Boston), where I've lived for the past fourteen-ish years. 
          I have four siblings—one older brother and three younger sisters—so it's been pretty chaotic.</p>
        
        <div className='siblingContainer'>
          {siblingMap}
        </div>

        <p>Here are a couple throwback pics. Not much has changed since then.</p>

        <div className='familyImageContainer'>
          <img width='400' src={require('./family1.jpg')} />
          <img width='400' src={require('./family2.jpg')} />
        </div>
        
        <p>On top of that, we have two dogs, Skip and Fli. They're both Jack Russell Terriers and super cute. Here's a picture of Fli in our backyard :)</p>
        <img className='center' src={require('./fli.jpg')} />

        <h2>What I've Been Doing</h2>
        <h3>Outside Activities</h3>
        <p>Even though staying home is important, I've still been able to get outside while staying away from people. 
          I'm glad I've been able to get some fresh air on most days. 
          Here are some of the things I've been doing outside.</p>
        <ul>
          <li><strong>Playing Badminton: </strong>My family set up a cheap little badminton net in the backyard. My ten-year-old sister has definitely spent the most time playing out there these past few weeks, so she's become a pretty tough competitor.</li>
          <li><strong>Running: </strong>I've enjoyed going for runs over the past few weeks. In high school I ran cross country and track, and now I'm part of the Dartmouth club triathlon team.</li>
          <li><strong>Walking: </strong>I think walking is pretty underrated. I've gone on some super nice walks recently. I like listening to music or podcasts as I move.</li>
        </ul>
        <p>If you want to play some backyard badminton, here's a badminton set you can try.</p>
        <p>
          <a target='_blank' href='https://www.walmart.com/ip/Driveway-Games-Badminton-Set/36009612'>Badminton Set</a>
        </p>
        <img className='center' src={require('./forest.jpg')} />

        <h3>Inside Activities</h3>
        <p>I also found a few ways to make the most of my time inside.</p>
        <ul>
          <li><strong>Sitting On the Couch Watching TV: </strong>I had a lot of time to just sit on the couch doing nothing or watching TV. Some of my favorite quarantine shows include Schitt's Creek, New Girl, and the Great British Baking Show (a family favorite).</li>
          <li><strong>Playing Piano: </strong>I've been playing piano for most of my life, and although I haven't played much in the past year, I was able to return to it a bit since I was stuck at home anyways. It's been fun.</li>
          <li><strong>Reading Books: </strong>A good book is a good way to pass the time. I just recently finished reading <em>Little Fires Everywhere</em>, which I highly reccommend.</li>
          <li><strong>Yoga: </strong>I really enjoy doing yoga, and when I'm stuck at home, I have plenty of time for it. It's fun to do online classes or just make up a sequence as I go along. Fun fact: I'm trained as a yoga teacher.</li>
        </ul>
        <p>A nice cup of tea is perfect for staying cozy inside.</p>
        <img className='center' src={require('./tea.jpg')} />
        <br></br>
        <br></br>

        <label for="question">What's your favorite thing to do at home?</label>
        <input id="question" type="text" onChange={onChangeFunction}/>

        <h2>Other Interesting Things</h2>
        <h3>Snow!!??</h3>
        <p>The weather was pretty warm for a little while, but about a week into break it actually SNOWED! 
          I was shocked. My family was shocked. Boston was shocked.</p>
        <img className='center' src={require('./snow.jpg')} />
        <h3>List of Things To Do</h3>
        <p>My youngest sister made a list of things to do if you get bored at home. Do you want some ideas?</p>
        <button onClick={buttonFunction}>Yes!</button>

        <ol>
          <li>Drink much tea.</li>
          <li>Play the card game war against yourself.</li>
          <li>Roll yourself up in a rug.</li>
          <li>Make a pillow fort.</li>
          <li>Wear lots of socks.</li>
        </ol>
        <img className='center' src={require('./list.jpg')} />

      </body>
    </div>
  );
}

export default App;
