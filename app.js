  let pronoun = ['the','our', 'last'];
  let adj = ['great', 'big', 'of'];
  let noun = ['jogger','racoon', 'us'];
  let extensions = ['.com', '.net', '.cl', '.io', '.us']

  for (let p of pronoun)
    for (let a  of adj)
        for (let n of noun)
            for (let e of extensions)
                if (e.includes(n)){
                    console.log(p + a + e);
                } else {
                    console.log(p + a + n + e);
                }
                