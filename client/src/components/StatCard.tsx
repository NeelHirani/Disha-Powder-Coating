interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid={`stat-value-${label.toLowerCase().replace(/\s+/g, '-')}`}>
        {value}
      </p>
      <p className="text-muted-foreground" data-testid={`stat-label-${label.toLowerCase().replace(/\s+/g, '-')}`}>
        {label}
      </p>
    </div>
  );
}
