create table public.formations (
  id               uuid        primary key default gen_random_uuid(),
  code             text        not null unique,
  titre            text,
  accroche         text,
  objectif_general text,
  public_concerne  text,
  duree            text,
  modalites        text,
  programme        jsonb,
  competences      jsonb,
  finançable       boolean     not null default true,
  actif            boolean     not null default true,
  ordre            integer,
  updated_at       timestamptz not null default now()
);

create trigger formations_updated_at
  before update on public.formations
  for each row execute function public.set_updated_at();

-- RLS
alter table public.formations enable row level security;

create policy "Lecture publique"
  on public.formations
  for select
  using (true);
