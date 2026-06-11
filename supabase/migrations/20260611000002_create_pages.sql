create table public.pages (
  id               uuid        primary key default gen_random_uuid(),
  slug             text        not null unique,
  title            text,
  meta_title       text,
  meta_description text,
  noindex          boolean     not null default false,
  content          jsonb,
  updated_at       timestamptz not null default now()
);

create trigger pages_updated_at
  before update on public.pages
  for each row execute function public.set_updated_at();

-- RLS
alter table public.pages enable row level security;

create policy "Lecture publique"
  on public.pages
  for select
  using (true);
