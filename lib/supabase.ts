import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function uploadImage(file: File, bucket: string = 'images'): Promise<string | null> {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${Date.now()}-${fileName}`;

    const { data, error } = await supabase.storage.from(bucket).upload(filePath, file);

    if (error) {
      console.error('Upload error:', error);
      return null;
    }

    const { data: publicUrlData } = supabase.storage.from(bucket).getPublicUrl(data.path);

    return publicUrlData.publicUrl;
  } catch (error) {
    console.error('Upload error:', error);
    return null;
  }
}
