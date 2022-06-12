// TODO: replace hardcoded mock data with @mswjs/data & faker combination
const todos = [
  {
    id: '1',
    task: 'Get the milk',
    done: true,
  },
  {
    id: '2',
    task: 'Waking to the buzz of the alarm clock, their blackberry was, in this moment, a sincere rabbit',
    done: true,
  },
  {
    id: '3',
    task: 'Quoting with intend: "The camels could be said to resemble sympathetic limes;',
    done: true,
  },
  {
    id: '4',
    task: "Few can name an energetic turtle that isn't a credible bear",
    done: true,
  },
  {
    id: '5',
    task: 'An octopus is the chicken of a bird',
    done: false,
  },
  {
    id: '6',
    task: 'In his own words: "It\'s very tricky, if not impossible, the camel of an apple becomes a helpful prune.',
    done: true,
  },
  {
    id: '7',
    task: 'Extending this logic, charming kangaroos show us how bears can be pears',
    done: true,
  },
  {
    id: '8',
    task: 'Washing and polishing the car,snails are resolute persimmons',
    done: false,
  },
  {
    id: '9',
    task: 'A hippopotamus is the turtle of a spider',
    done: false,
  },
  {
    id: '10',
    task: 'Alluring bananas show us how crocodiles can be melons',
    done: false,
  },
  {
    id: '11',
    task: 'A seal of the blueberry is assumed to be a self-disciplined persimmon',
    done: false,
  },
  {
    id: '12',
    task: 'One cannot separate cows from punctual limes',
    done: false,
  },
  {
    id: '13',
    task: 'If this was somewhat unclear, they were lost without the modest lobster that composed their goat',
    done: false,
  },
  {
    id: '14',
    task: 'A shark of the camel is assumed to be a resolute cranberry',
    done: false,
  },
  {
    id: '15',
    task: 'Congratulations to the wolf that won the discreet lobster with a peach',
    done: false,
  },
  {
    id: '16',
    task: 'The cooperative cranberry comes from a fearless duck',
    done: false,
  },
  {
    id: '17',
    task: 'As far as we can estimate, a comfortable scorpion without lemons is truly a orange of talented rats',
    done: true,
  },
  {
    id: '18',
    task: 'Quoting with intend: "The dogs could be said to resemble humorous spiders.',
    done: true,
  },
  {
    id: '19',
    task: 'In her own words: "Some posit the communicative deer to be less than kind-hearted.',
    done: false,
  },
  {
    id: '20',
    task: 'The zeitgeist contends that we can assume that any instance of an eagle can be construed as a helpful turtle',
    done: false,
  },
  {
    id: '21',
    task: 'Some posit the exclusive octopus to be less than intellectual',
    done: true,
  },
  {
    id: '22',
    task: 'Good ducks show us how plums can be raspberries',
    done: false,
  },
  {
    id: '23',
    task: 'We can assume that any instance of a rat can be construed as a talented grapefruit',
    done: false,
  },
  {
    id: '24',
    task: 'One cannot separate peaches from loyal pigs',
    done: true,
  },
  {
    id: '25',
    task: 'Kittens are persistent seals',
    done: true,
  },
  {
    id: '26',
    task: "A seal is a currant's dog",
    done: false,
  },
  {
    id: '27',
    task: 'An obedient puppy without lobsters is truly a deer of communicative flies',
    done: false,
  },
  {
    id: '28',
    task: 'Kittens are careful pears',
    done: true,
  },
  {
    id: '29',
    task: 'A spider is a calm lion',
    done: false,
  },
  {
    id: '30',
    task: 'However, apricots are determined cats',
    done: false,
  },
  {
    id: '31',
    task: 'Hamsters are pioneering snails',
    done: true,
  },
  {
    id: '32',
    task: 'The zeitgeist contends that the chimpanzee is a melon',
    done: false,
  },
  {
    id: '33',
    task: 'In his own words: "We know that the dolphins could be said to resemble plausible giraffes?',
    done: false,
  },
  {
    id: '34',
    task: 'Congratulations to the dog that won the philosophical elephant with a seal',
    done: false,
  },
  {
    id: '35',
    task: 'A camel of the kangaroo is assumed to be a talented turtle',
    done: true,
  },
  {
    id: '36',
    task: 'In his own words: "Some posit the cooperative squirrel to be less than vivacious;',
    done: false,
  },
  {
    id: '37',
    task: 'We can assume that any instance of a squirrel can be construed as a sensitive cheetah',
    done: true,
  },
  {
    id: '38',
    task: 'Yelling: "A watermelon is a chicken from the right perspective.',
    done: true,
  },
  {
    id: '39',
    task: 'In his own words: "Though we assume the latter, the literature would have us believe that a passionate kumquat is not but a grape.',
    done: true,
  },
  {
    id: '40',
    task: "Few can name a versatile grape that isn't an exclusive fox",
    done: false,
  },
  {
    id: '41',
    task: 'A squirrel sees a horse as a talented spider',
    done: true,
  },
  {
    id: '42',
    task: 'A panda is the dog of a kangaroo',
    done: false,
  },
  {
    id: '43',
    task: 'The literature would have us believe that an amiable kitten is not but an apple',
    done: false,
  },
  {
    id: '44',
    task: "This could be, or perhaps an ambitious lion's raspberry comes with it the thought that the sociable alligator is a camel",
    done: false,
  },
  {
    id: '45',
    task: 'The determined shark reveals itself as a fantastic strawberry to those who look',
    done: false,
  },
  {
    id: '46',
    task: 'The modest cranberry comes from a steadfast hamster',
    done: false,
  },
  {
    id: '47',
    task: 'This could be, or perhaps we can assume that any instance of an orange can be construed as a honorable wolf',
    done: false,
  },
  {
    id: '48',
    task: 'Some fair-minded bears are thought of simply as oranges',
    done: false,
  },
  {
    id: '49',
    task: 'Backup the MacBook',
    done: false,
  },
  {
    id: '69',
    task: 'Write the damn resolver!',
    done: false,
  },
];

export { todos };
