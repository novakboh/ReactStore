import './App.css'
import Card from './Card.tsx'
import Sidebar from './Sidebar.tsx'
import phoneWhiteImage from './assets/phone_white.png'
import phoneBlackImage from './assets/phone_black.png'
import phoneOrangeImage from './assets/phone_orange.png'

function App() {
  const phones = [
    {
      image: phoneWhiteImage,
      title: 'Apple iPhone 17 Pro 256GB Silver (MG8G4)',
      cashback: '639 ₴',
      oldPrice: '66 999 ₴',
      discount: '-4%',
      price: '63 999 ₴',
      rating: 4,
      reviews: '8',
    },
    {
      image: phoneOrangeImage,
      title: 'Apple iPhone 17 Pro 256GB Cosmic Orange (MG8H4)',
      cashback: '609 ₴',
      oldPrice: '66 999 ₴',
      discount: '-9%',
      price: '60 999 ₴',
      rating: 3,
      reviews: '8',
    },
    {
      image: phoneOrangeImage,
      title: 'Apple iPhone 17 Pro 512GB Cosmic Orange (MG8M4)',
      cashback: '739 ₴',
      oldPrice: '76 999 ₴',
      discount: '-4%',
      price: '73 999 ₴',
      rating: 0,
      reviews: '8',
    },
    {
      image: phoneBlackImage,
      title: 'Apple iPhone 17 Pro 256GB Deep Blue (MG8J4)',
      cashback: '609 ₴',
      oldPrice: '66 999 ₴',
      discount: '-9%',
      price: '60 999 ₴',
      rating: 4,
      reviews: '8',
    },
    {
      image: phoneBlackImage,
      title: 'Apple iPhone 17 Pro 512GB Deep Blue (MG8N4)',
      cashback: '739 ₴',
      oldPrice: '76 999 ₴',
      discount: '-4%',
      price: '73 999 ₴',
      rating: 0,
      reviews: '8',
    },
    {
      image: phoneWhiteImage,
      title: 'Apple iPhone 17 Pro 512GB Silver (MG8K4)',
      cashback: '739 ₴',
      oldPrice: '76 999 ₴',
      discount: '-4%',
      price: '73 999 ₴',
      rating: 0,
      reviews: '8',
    },
    {
      image: phoneBlackImage,
      title: 'Apple iPhone 17 Pro 1TB Deep Blue (MG8R4)',
      cashback: '839 ₴',
      oldPrice: '86 999 ₴',
      discount: '-3%',
      price: '83 999 ₴',
      rating: 0,
      reviews: '8',
    },
    {
      image: phoneOrangeImage,
      title: 'Apple iPhone 17 Pro 1TB Cosmic Orange (MG8Q4)',
      cashback: '839 ₴',
      oldPrice: '86 999 ₴',
      discount: '-3%',
      price: '83 999 ₴',
      rating: 0,
      reviews: '8',
    },
    {
      image: phoneWhiteImage,
      title: 'Apple iPhone 17 Pro 1TB Silver (MG8P4)',
      cashback: '839 ₴',
      oldPrice: '86 999 ₴',
      discount: '-3%',
      price: '83 999 ₴',
      rating: 0,
      reviews: '8',
    },
  ]

  return (
    <div className="page">
      <aside className="sidebar">
        <Sidebar />
      </aside>

      <main className="products">
        <div className="products-grid">
          {phones.map((phone, index) => (
            <Card key={index} {...phone} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App