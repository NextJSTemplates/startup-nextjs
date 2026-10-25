-- Contact enquiries are written by the server-side API using the Supabase service role.
-- RLS is enabled and no anon/authenticated policies are created intentionally.
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 100),
  email text not null check (char_length(email) <= 254),
  subject text,
  message text not null check (char_length(message) between 10 and 5000),
  status text not null default 'new' check (status in ('new', 'in_progress', 'resolved', 'spam')),
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

revoke all on table public.contact_messages from anon, authenticated;
grant select, insert, update, delete on table public.contact_messages to service_role;
