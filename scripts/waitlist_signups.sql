-- Waitlist table for the marketing site email capture form.
-- Run once in the Supabase SQL editor (project ulyyfajdakyzkuokcdmv).
--
-- The website inserts via the anon key; RLS allows INSERT only, so visitors
-- can never read the list. View signups in the Supabase dashboard.

create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  locale text,
  source text,
  created_at timestamptz not null default now()
);

alter table public.waitlist_signups enable row level security;

create policy "Allow anonymous waitlist signups"
  on public.waitlist_signups
  for insert
  to anon
  with check (true);

-- Intentionally no SELECT/UPDATE/DELETE policies: the anon key can only insert.
-- The unique constraint on email makes duplicate signups return HTTP 409,
-- which the website form shows as "already on the list".
