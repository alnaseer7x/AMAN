-- One fixed, non-sensitive demo row for verifying the Supabase connection.
-- This is not the production projects schema. Add authentication and owner-based
-- Row Level Security before storing real customer or project data.

create table if not exists public.aman_demo_projects (
  id text primary key check (id = 'aman-demo-project'),
  title text not null check (title = 'مشروع AMAN التجريبي'),
  amount integer not null check (amount = 1200),
  created_at timestamptz not null default now()
);

alter table public.aman_demo_projects enable row level security;

grant select, insert on public.aman_demo_projects to anon;

drop policy if exists "aman demo project can be read" on public.aman_demo_projects;
create policy "aman demo project can be read"
  on public.aman_demo_projects
  for select
  to anon
  using (id = 'aman-demo-project');

drop policy if exists "only the fixed aman demo project can be inserted" on public.aman_demo_projects;
create policy "only the fixed aman demo project can be inserted"
  on public.aman_demo_projects
  for insert
  to anon
  with check (
    id = 'aman-demo-project'
    and title = 'مشروع AMAN التجريبي'
    and amount = 1200
  );
