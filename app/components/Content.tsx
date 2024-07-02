const Content = () => {
    return (
      <main className="flex-1 p-8 bg-gray-50">
        <div className="flex items-center justify-between">
          <button className="text-blue-500">Back</button>
          <h2 className="text-2xl font-bold">Templates / Sales Effectiveness / BANT</h2>
        </div>
        <h1 className="mt-4 text-3xl font-bold">Analyse the calls for Soft Skills Coaching</h1>
        <div className="mt-8 space-y-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold">Call Opening</h3>
            <p className="mt-2 text-gray-700">Was the purpose of the call stated in the beginning?</p>
            <div className="mt-4 p-4 border rounded-lg">
              <p className="text-gray-500">HOW WILL THIS BE SCORED?</p>
              <p className="mt-2">Was the purpose of the call stated in the beginning?</p>
              <p className="mt-2">Did the PST member greet the customer and use the call opening with good energetic tone?</p>
              <p className="mt-2">Did the PST member use the right salutation and greeting on the email?</p>
              <button className="mt-4 text-blue-500">Edit</button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold">Greeting</h3>
            <p className="mt-2 text-gray-700">Did the salesperson use an appropriate opening greeting?</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold">Call Closing</h3>
            <p className="mt-2 text-gray-700">Did the salesperson summarize the key points discussed during the call?</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold">Confidence</h3>
            <p className="mt-2 text-gray-700">Did the salesperson appear confident and knowledgeable about the product?</p>
          </div>
        </div>
      </main>
    );
  };
  
  export default Content;
  