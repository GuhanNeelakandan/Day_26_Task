import './App.css';
import Card from './card.js'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let priceCard = [
    // <!-- Free Tier -->
    // for bold use key name1.

    {
      plan: 'Free',
      price: 0,
      period: 'month',
      features: [
        {
          name: 'Single User',
          accept:true,
        },
        {
          name: '5GB Storage',
          accept:true,
        },
        {
          name: 'Unlimited Public Projects',
          accept:true,
        },
        {
          name: 'Community Access',
          accept:true,
        },
        {
          name: 'Unlimited Private Projects',
          mute:true,
          accept:false,
        },
        {
          name: 'Dedicated Phone Support',
          mute:true,
          accept:false,
        },
        {
          name: 'Free Subdomain',
          mute:true,
          accept:false,
        },
        {
          name: 'Monthly Status Reports',
          mute:true,
          accept:false,
        },
        
      ],
    },
    // <!-- Plus Tier -->
    {
      plan: 'Plus',
      price: 9,
      period: 'month',
      features: [
        {
          name1: '5 Users',
          accept:true,
          isBold:true,
        },
        {
          name: '50GB Storage',
          accept:true,
        },
        {
          name: 'Unlimited Public Projects',
          accept:true,
        },
        {
          name: 'Community Access',
          accept:true,
        },
        {
          name: 'Unlimited Private Projects',
          accept:true,
        },
        {
          name: 'Dedicated Phone Support',
          accept:true,
        },
        {
          name: 'Free Subdomain',
          accept:true,
        },
        {
          name: 'Monthly Status Reports',
          mute:true,
          accept:false,
        },
        
      ],
    },
    {
      plan: 'Pro',
      price: 49,
      period: 'month',
      features: [
        {
          name1: 'Unlimited Users',
          accept:true,
          isBold:true,
        },
        {
          name: '150GB Storage',
          accept:true,
        },
        {
          name: 'Unlimited Public Projects',
          accept:true,
        },
        {
          name: 'Community Access',
          accept:true,
        },
        {
          name: 'Unlimited Private Projects',
          accept:true,
        },
        {
          name: 'Dedicated Phone Support',
          accept:true,
        },
        {
          name1: 'Unlimited ',
          name:'Free Subdomain',
          accept:true,
        },
        {
          name: 'Monthly Status Reports',
          accept:true,
        },
        
      ],
    },
  ];
// component
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
        {priceCard.map((card) => {
          return <Card priceData={card} />;
        })}
        </div>
      </div>
    </section>
  );
}

export default App;
