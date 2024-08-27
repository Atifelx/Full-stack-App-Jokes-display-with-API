const express = require('express')
const app = express()

const port =process.env.PORT || 4000;


app.get('/', (req, res) => {
  res.send('Server is Ready')
})



app.get('/api/jokes', (req, res) => {
  const jokes = [
    { id: 1, title: 'Why don’t scientists trust atoms?', content: 'Because they make up everything!', isjoke: true },
    { id: 2, title: 'What do you call fake spaghetti?', content: 'An impasta!', isjoke: true },
    { id: 3, title: 'Why did the scarecrow win an award?', content: 'Because he was outstanding in his field!', isjoke: true },
    { id: 4, title: 'How does a penguin build its house?', content: 'Igloos it together!', isjoke: true },
    { id: 5, title: 'Why don’t skeletons fight each other?', content: 'They don’t have the guts.', isjoke: true },
    { id: 6, title: 'What do you get when you cross a snowman with a vampire?', content: 'Frostbite.', isjoke: true },
    { id: 7, title: 'Why did the math book look sad?', content: 'Because it had too many problems.', isjoke: true },
    { id: 8, title: 'What’s orange and sounds like a parrot?', content: 'A carrot!', isjoke: true },
    { id: 9, title: 'Why did the golfer bring two pairs of pants?', content: 'In case he got a hole in one.', isjoke: true },
    { id: 10, title: 'What do you call cheese that isn’t yours?', content: 'Nacho cheese.', isjoke: true },
];

res.send(jokes)
  })

app.listen(port, () => {
  console.log(`server is on port ${port}`)
})



