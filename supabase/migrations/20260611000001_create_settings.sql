-- Fonction partagée de mise à jour automatique du champ updated_at
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Table de configuration globale du site
create table public.settings (
  id         uuid        primary key default gen_random_uuid(),
  key        text        not null unique,
  value      text,
  updated_at timestamptz not null default now()
);

create trigger settings_updated_at
  before update on public.settings
  for each row execute function public.set_updated_at();

-- RLS
alter table public.settings enable row level security;

-- Seule la clé "noindex_global" est lisible publiquement
create policy "Lecture publique noindex_global"
  on public.settings
  for select
  using (key = 'noindex_global');
