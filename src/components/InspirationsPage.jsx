import sfs from '../assets/sfs shorten.gif'
import doraemon from '../assets/shorten doraemon.gif'
import marc from '../assets/shorten marc brunet.gif'
import lwa from '../assets/shortenLWA.gif'

function InspirationsPage() {
  const inspirations = [
    {
      title: 'SpoonfedStudy',
      gif: sfs,
      description: 'Helps me keep going through creative ways'
    },
    {
      title: 'Doraemon',
      gif: doraemon,
      description: 'Childhood'
    },
    {
      title: 'Marc Brunet',
      gif: marc,
      description: 'Motivates me to study art'
    },
    {
      title: 'Little Witch Academia',
      gif: lwa,
      description: 'You dont get that which you dream of, but what you work hard for'
    }
    // Add more inspirations here
  ]

  return (
    <div className="page">
      <h1 className="page-title">What Inspires Me</h1>
      <p className="inspiration-intro">Here are some things that keep me motivated and creative every day.</p>
      
      <div className="inspirations-grid">
        {inspirations.map((item, index) => (
          <div key={index} className="inspiration-card">
            <img src={item.gif} alt={item.title} className="inspiration-gif" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InspirationsPage
