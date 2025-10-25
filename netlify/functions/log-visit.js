exports.handler = async (event, context) => {
  // Get visitor IP from request headers
  const ip = event.headers['x-forwarded-for'] || event.ip || 'Unknown IP';
  const userAgent = event.headers['user-agent'] || 'Unknown agent';

  console.log(`New visit from ${ip} (${userAgent})`);

  // You can expand this to write to a database, file, or API later

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Visit logged", ip }),
  };
};

