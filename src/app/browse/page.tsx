import { BrowseClient } from './BrowseClient';
import { createClient } from '@/lib/supabase/server';
import { Navigation } from '@/components/Navigation';

interface BrowsePageProps {
  searchParams: Promise<{
    category?: string;
    form?: string;
  }>;
}

export default async function BrowsePage({ searchParams }: BrowsePageProps) {
  const params = await searchParams;

  // Check if user is authenticated
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <>
      <Navigation />
      <BrowseClient
        highlightCategory={params.category}
        highlightForm={params.form}
        isAuthenticated={!!user}
      />
    </>
  );
}
