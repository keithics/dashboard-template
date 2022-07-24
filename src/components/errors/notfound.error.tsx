function NotfoundError() {
  return (
    <>
      <div>
        <main
          className="min-h-screen bg-no-repeat bg-center"
          style={{
            backgroundImage: 'url("/404.png")',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-2 text-center sm:px-6 sm:py-2 lg:px-16 lg:py-16">
            <p className="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide">404 error</p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-700 tracking-tight sm:text-5xl">Page not found</h1>
            <p className="mt-2 text-lg font-medium text-black text-opacity-50">
              Please check the URL in the address bar and try again.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

export default NotfoundError;
