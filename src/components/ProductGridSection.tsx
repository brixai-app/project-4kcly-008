import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import { Search, Filter, Sliders, X, Tag as TagIcon, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mockAssets } from '@/data/mockData';

export type ProductGridSectionProps = {
  heading?: string;
};

type Asset = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  era: string;
  tags: string[];
  highlight?: string;
};

function AssetCard({
  asset,
  onOpen,
}: {
  asset?: Asset;
  onOpen?: (asset: Asset) => void;
}) {
  const safeAsset = asset ?? {
    id: 'fallback',
    title: 'K & D Moment',
    description: 'A captured moment in their shared journey.',
    imageUrl:
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    category: 'Archive',
    era: '2011–2024',
    tags: ['iconic', 'studio'],
    highlight: 'A friendship written in 16s and hooks.',
  };
  const handleClick = () => {
    if (onOpen) {
      onOpen(safeAsset);
    }
  };
  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className="group flex flex-col overflow-hidden rounded-2xl border text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e11d48]"
      style={{ backgroundColor: '#ffffff', borderColor: '#e11d4833' }}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={safeAsset.imageUrl}
          alt={safeAsset.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          crossOrigin="anonymous"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
        <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
          {safeAsset.category ?? ''}
        </span>
      </div>
      <div className="flex flex-1 flex-col space-y-2 px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold" style={{ color: '#18181b' }}>
            {safeAsset.title ?? ''}
          </h3>
          <span className="text-xs font-medium uppercase tracking-wide text-[#e11d48]">
            {safeAsset.era ?? ''}
          </span>
        </div>
        <p className="line-clamp-2 text-xs opacity-80" style={{ color: '#18181b' }}>
          {safeAsset.description ?? ''}
        </p>
        <div className="mt-auto flex items-center justify-between pt-1">
          <div className="flex flex-wrap gap-1">
            {(safeAsset.tags ?? []).slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#e11d480d] px-2 py-0.5 text-[10px] font-medium text-[#e11d48]"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#e11d48]">
            View Story
            <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}

function AssetDrawer({
  asset,
  open,
  onOpenChange,
}: {
  asset?: Asset | null;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const isOpen = open ?? false;
  const current = asset ?? null;
  const handleChange = (next: boolean) => {
    if (onOpenChange) {
      onOpenChange(next);
    }
  };
  return (
    <Dialog.Root open={isOpen} onOpenChange={handleChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out" />
        <Dialog.Content className="fixed inset-y-0 right-0 flex w-full max-w-lg flex-col bg-white shadow-2xl focus:outline-none">
          <div className="flex items-center justify-between border-b px-6 py-4" style={{ borderColor: '#e11d4833' }}>
            <Dialog.Title className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#18181b' }}>
              Asset Story
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs transition hover:bg-[#e11d48] hover:text-white"
                style={{ borderColor: '#e11d4833', color: '#18181b' }}
              >
                <X className="h-4 w-4" />
              </button>
            </Dialog.Close>
          </div>
          <div className="flex-1 space-y-6 overflow-y-auto px-6 py-5">
            <div className="relative overflow-hidden rounded-2xl border" style={{ borderColor: '#e11d4833' }}>
              <img
                src={
                  current?.imageUrl ??
                  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80'
                }
                alt={current?.title ?? 'Asset visual'}
                className="h-64 w-full object-cover"
                crossOrigin="anonymous"
              />
              <img
                src="https://brixai-assets-1.s3.ap-south-1.amazonaws.com/users/4kcLyAtsuzNqFl0zyaJU7QSAMLO2/projects/008/assets/31d6169e-aef5-4afc-bfce-0efe464b4c80.png"
                alt="make them hug"
                className="pointer-events-none absolute -bottom-6 -right-4 h-28 w-28 opacity-90"
                crossOrigin="anonymous"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold" style={{ color: '#18181b' }}>
                {current?.title ?? 'Untitled Asset'}
              </h2>
              <p className="text-xs uppercase tracking-wide text-[#e11d48]">
                {current?.category ?? 'Archive'} • {current?.era ?? '2011–2024'}
              </p>
            </div>
            <p className="text-sm leading-relaxed opacity-90" style={{ color: '#18181b' }}>
              {current?.description ??
                'A vignette from the evolving friendship between Kendrick and Drake, captured in fabric, posture, and mood.'}
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div
                className="flex flex-col gap-2 rounded-2xl border p-3"
                style={{ borderColor: '#e11d4833', backgroundColor: '#ffffff' }}
              >
                <span className="text-[11px] font-medium uppercase tracking-wide text-[#e11d48]">
                  Moodline
                </span>
                <p className="text-xs opacity-90" style={{ color: '#18181b' }}>
                  {current?.highlight ??
                    'Two careers orbiting each other—sometimes parallel, sometimes intersecting, always electric.'}
                </p>
              </div>
              <div
                className="flex flex-col gap-2 rounded-2xl border p-3"
                style={{ borderColor: '#e11d4833', backgroundColor: '#ffffff' }}
              >
                <span className="text-[11px] font-medium uppercase tracking-wide text-[#e11d48]">
                  Tagged Vibes
                </span>
                <div className="flex flex-wrap gap-1">
                  {(current?.tags ?? ['studio', 'stage']).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full bg-[#e11d480f] px-2 py-0.5 text-[10px] font-medium text-[#e11d48]"
                    >
                      <TagIcon className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-2xl border px-3 py-3" style={{ borderColor: '#e11d4833' }}>
              <div className="flex items-center gap-2">
                <img
                  src="https://brixai-assets-1.s3.ap-south-1.amazonaws.com/users/4kcLyAtsuzNqFl0zyaJU7QSAMLO2/projects/008/media/6a209176-dd7b-4c76-b3ac-0ed8b899131c.png"
                  alt="image.png"
                  className="h-9 w-9 rounded-full object-cover"
                  crossOrigin="anonymous"
                />
                <div className="text-xs">
                  <p className="font-medium" style={{ color: '#18181b' }}>
                    Wardrobe Notes
                  </p>
                  <p className="opacity-75" style={{ color: '#18181b' }}>
                    Layered neutrals, sharp lines, shared spotlight.
                  </p>
                </div>
              </div>
              <img
                src="https://brixai-assets-1.s3.ap-south-1.amazonaws.com/users/4kcLyAtsuzNqFl0zyaJU7QSAMLO2/projects/008/media/11746302-cec5-4b69-b8f2-35dc074890d7.png"
                alt="image.png"
                className="h-10 w-10 rounded-xl object-cover"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function ProductGridSection(props: ProductGridSectionProps = {}) {
  const { heading = 'Asset Highlights' } = props;
  const [query, setQuery] = useState('');
  const [tagFilter, setTagFilter] = useState<string>('all');
  const [sortKey, setSortKey] = useState<'era' | 'category'>('era');
  const [selected, setSelected] = useState<Asset | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const assets = (mockAssets as Asset[]) ?? [];
  const tags = useMemo(
    () =>
      Array.from(
        new Set(
          assets
            .flatMap((a) => a?.tags ?? [])
            .filter((t) => typeof t === 'string' && t.trim().length > 0),
        ),
      ),
    [assets],
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return assets
      .filter((asset) => {
        if (!asset) return false;
        const matchesQuery =
          !q ||
          asset.title?.toLowerCase().includes(q) ||
          asset.description?.toLowerCase().includes(q) ||
          asset.category?.toLowerCase().includes(q);
        const matchesTag = tagFilter === 'all' || (asset.tags ?? []).includes(tagFilter);
        return matchesQuery && matchesTag;
      })
      .sort((a, b) => {
        if (sortKey === 'category') {
          return (a.category ?? '').localeCompare(b.category ?? '');
        }
        return (a.era ?? '').localeCompare(b.era ?? '');
      });
  }, [assets, query, tagFilter, sortKey]);

  const handleOpenAsset = (asset: Asset) => {
    setSelected(asset);
    setDrawerOpen(true);
  };

  return (
    <section id="product-grid" className="mx-auto max-w-7xl space-y-6 px-6">
      <motion.div
        className="space-y-3 text-center"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: '#18181b' }}>
          {heading}
        </h2>
        <p className="mx-auto max-w-2xl text-sm opacity-85" style={{ color: '#18181b' }}>
          A curated grid of visual moments—tour looks, street snapshots, and imagined fits that map
          the Kendrick &amp; Drake timeline.
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col gap-3 rounded-2xl border px-4 py-3 md:flex-row md:items-center md:justify-between"
        style={{ borderColor: '#e11d4833', backgroundColor: '#ffffff' }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 rounded-xl border px-3 py-2" style={{ borderColor: '#e11d4833' }}>
            <Search className="h-4 w-4 text-[#e11d48]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by era, vibe, or detail…"
              className="w-full bg-transparent text-sm outline-none placeholder:opacity-60"
              style={{ color: '#18181b' }}
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:justify-end">
          <div className="inline-flex items-center gap-1 rounded-full bg-[#e11d480b] px-2 py-1 text-[11px] font-medium text-[#e11d48]">
            <Filter className="h-3 w-3" />
            Filter tags
          </div>
          <select
            value={tagFilter}
            onChange={(e) => setTagFilter(e.target.value)}
            className="rounded-xl border px-2 py-1 text-xs outline-none"
            style={{ borderColor: '#e11d4833', color: '#18181b', backgroundColor: '#ffffff' }}
          >
            <option value="all">All moods</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </option>
            ))}
          </select>
          <div className="inline-flex items-center gap-1 rounded-xl border px-2 py-1 text-xs" style={{ borderColor: '#e11d4833' }}>
            <Sliders className="h-3 w-3 text-[#e11d48]" />
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as 'era' | 'category')}
              className="bg-transparent outline-none"
              style={{ color: '#18181b' }}
            >
              <option value="era">Era</option>
              <option value="category">Category</option>
            </select>
          </div>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((asset) => (
          <AssetCard key={asset?.id ?? Math.random().toString()} asset={asset} onOpen={handleOpenAsset} />
        ))}
      </div>
      <AssetDrawer asset={selected} open={drawerOpen} onOpenChange={setDrawerOpen} />
    </section>
  );
}

export default ProductGridSection;