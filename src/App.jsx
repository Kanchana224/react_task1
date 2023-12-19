// import React from 'react';

import React from 'react';

function App() {
  const data = [
    {
      title: 'Free',
      price: '$0',
      features: [
        { label: 'Single User', check: true },
        { label: '5GB Storage', check: true },
        { label: 'Unlimited Public Projects', check: true },
        { label: 'Community Access', check: true },
        { label: 'Unlimited Private Projects', check: false },
        { label: 'Dedicated Phone Support', check: false },
        { label: 'Free Subdomain', check: false },
        { label: 'Monthly Status Reports', check: false },
      ],
      buttonLabel: 'Button',
    },
    {
      title: 'Plus',
      price: '$9',
      features: [
        { label: '5 Users', check: true },
        { label: '50GB Storage', check: true },
        { label: 'Unlimited Public Projects', check: true },
        { label: 'Community Access', check: true },
        { label: 'Unlimited Private Projects', check: true },
        { label: 'Dedicated Phone Support', check: true },
        { label: 'Free Subdomain', check: true },
        { label: 'Monthly Status Reports', check: false },
      ],
      buttonLabel: 'Button',
    },
    {
      title: 'Pro',
      price: '$49',
      features: [
        { label: 'Unlimited Users', check: true },
        { label: '150GB Storage', check: true },
        { label: 'Unlimited Public Projects', check: true },
        { label: 'Community Access', check: true },
        { label: 'Unlimited Private Projects', check: true },
        { label: 'Dedicated Phone Support', check: true },
        { label: 'Unlimited Free Subdomains', check: true },
        { label: 'Monthly Status Reports', check: true },
      ],
      buttonLabel: 'Button',
    },
  ];

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {data.map((tier, i) => (
            <div key={i} className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">{tier.title}</h5>
                  <h6 className="card-price text-center">{tier.price}<span className="period">/month</span></h6>
                  <hr></hr>
                  <ul className="fa-ul">
                  {tier.features.map((feature, j) => {
                  let icon;
                  if (feature.check) {
                  icon = <i className="fas fa-check"></i>;
                  } else {
                  icon = <i className="fas fa-times opacity"></i>;
                 }

             return (
             <li key={j}><span className="fa-li">{icon}</span>{feature.label}</li>
              );
             })}
            </ul>
            <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">{tier.buttonLabel}</a>
            </div>
            </div>
           </div>
           </div>
           ))}
          </div>
          </div>
         </section>
         );
         }

export default App;
