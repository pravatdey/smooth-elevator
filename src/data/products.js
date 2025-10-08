import Prod1 from '../assets/prod1.svg'
import Prod2 from '../assets/prod2.svg'
import Prod3 from '../assets/prod3.svg'

const PRODUCTS = [
  {
    id: 'p1',
    name: 'HomeLift S200',
    price: '₹1,20,000',
    capacity: '320 kg',
    speed: '0.6 m/s',
    desc: 'A compact residential lift ideal for villas and apartments. Smooth start/stop and low maintenance.',
    features: ['Quiet traction drive', 'Low power consumption', 'Custom cabin options'],
    img: Prod1,
  },
  {
    id: 'p2',
    name: 'ComLift X500',
    price: '₹4,80,000',
    capacity: '1000 kg',
    speed: '1.0 m/s',
    desc: 'Heavy-duty commercial lift with high reliability and long MTBF. Suitable for offices, malls and hospitals.',
    features: ['VVVF drive', 'High duty cycle', 'Emergency rescue system'],
    img: Prod2,
  },
  {
    id: 'p3',
    name: 'EcoModern R1',
    price: '₹2,50,000',
    capacity: 'n/a',
    speed: 'n/a',
    desc: 'Modernization kit: replace controls, add regenerative drives and refresh the cab interior.',
    features: ['Controller upgrade', 'Energy recuperation', 'Cabin refurbishment'],
    img: Prod3,
  },
]

export default PRODUCTS
