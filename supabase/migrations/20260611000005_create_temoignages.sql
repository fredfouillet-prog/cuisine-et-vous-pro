create table public.temoignages (
  id         uuid        primary key default gen_random_uuid(),
  auteur     text,
  entreprise text,
  texte      text,
  actif      boolean     not null default true,
  ordre      integer,
  updated_at timestamptz not null default now()
);

create trigger temoignages_updated_at
  before update on public.temoignages
  for each row execute function public.set_updated_at();

-- RLS
alter table public.temoignages enable row level security;

create policy "Lecture publique"
  on public.temoignages
  for select
  using (true);
