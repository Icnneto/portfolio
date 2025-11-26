import { supabaseAdmin } from '@/app/lib/supabase';
import { NextResponse } from 'next/server';

// GET - Fetch views
export async function GET() {
    const { data, error } = await supabaseAdmin
        .from('stats')
        .select('views')
        .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ views: data?.views ?? 0 });
}

// POST - Increment views
export async function POST() {
    const { data: current } = await supabaseAdmin
        .from('stats')
        .select('views')
        .single();

    const { data, error } = await supabaseAdmin
        .from('stats')
        .update({ views: (current?.views ?? 0) + 1 })
        .eq('id', 1)
        .select()
        .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ views: data?.views });
}
