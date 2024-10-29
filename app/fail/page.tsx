export default function UnauthorizedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Unauthorized Access</h1>
        <p className="text-muted-foreground">
          Please provide a valid password as a query parameter to access this
          page.
        </p>
      </div>
    </main>
  );
}
