export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex gap-4">
        <div className="min-w-20 h-10 text-primary p-2 bg-primary">primary</div>
        <div className="min-w-20 h-10 text-primary p-2 bg-secondary">secondary</div>
        <div className="min-w-20 h-10 text-primary p-2 bg-secondary-foreground">secondary-foreground</div>
        <div className="min-w-20 h-10 text-primary p-2 bg-foreground">foreground</div>
        <div className="min-w-20 h-10 text-primary p-2 bg-card-foreground">card</div>
        <div className="min-w-20 h-10 text-primary p-2 bg-muted">muted</div>
        <div className="min-w-20 h-10 text-primary p-2 bg-muted-foreground">muted-foreground</div>
        <div className="min-w-20 h-10 text-primary p-2 bg-card">card</div>
        <div className="min-w-20 h-10 text-primary p-2 bg-destructive">destructive</div>
        <div className="min-w-20 h-10 text-primary p-2 bg-destructive-foreground">destructive-foreground</div>
        <div className="min-w-20 h-10 text-primary p-2 bg-border">border</div>
        <div className="min-w-20 h-10 text-primary p-2 bg-input">input</div>
      </div>
    </div>
  );
}
