import {
  Award,
  BedDouble,
  Brain,
  Cigarette,
  ClipboardList,
  Dumbbell,
  Flower2,
  HandHeart,
  Heart,
  HeartHandshake,
  HeartPulse,
  Home,
  Leaf,
  Lock,
  MessageCircle,
  Pill,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Sun,
  TreeDeciduous,
  TrendingUp,
  User,
  UserCheck,
  Users,
  UtensilsCrossed,
  Wine,
} from 'lucide-react'

const iconMap = {
  Award,
  BedDouble,
  Brain,
  Cigarette,
  ClipboardList,
  Dumbbell,
  Flower2,
  HandHeart,
  Heart,
  HeartHandshake,
  HeartPulse,
  Home,
  Leaf,
  Lock,
  MessageCircle,
  Pill,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Sun,
  TreeDeciduous,
  TrendingUp,
  User,
  UserCheck,
  Users,
  UtensilsCrossed,
  Wine,
}

export function getIcon(name) {
  return iconMap[name] || Sparkles
}

export function formatPhone(phone) {
  return phone || '+91 00000 00000'
}

export function truncate(text, length = 120) {
  if (!text) return ''
  return text.length > length ? `${text.slice(0, length)}...` : text
}