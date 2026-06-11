create table public.team_buildings (
  id           uuid        primary key default gen_random_uuid(),
  titre        text,
  description  text,
  duree        text,
  participants text,
  tarif        text,
  actif        boolean     not null default true,
  ordre        integer,
  updated_at   timestamptz not null default now()
);

create trigger team_buildings_updated_at
  before update on public.team_buildings
  for each row execute function public.set_updated_at();

-- RLS
alter table public.team_buildings enable row level security;

create policy "Lecture publique"
  on public.team_buildings
  for select
  using (true);
