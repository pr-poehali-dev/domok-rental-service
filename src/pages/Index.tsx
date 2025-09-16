import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Icon from '@/components/ui/icon'

export default function Index() {
  const popularProperties = [
    {
      id: 1,
      title: 'Просторная 2-комнатная в центре',
      price: '85 000',
      location: 'Москва, Тверская ул.',
      rooms: 2,
      area: 72,
      image: '/img/9995f870-aa0f-4eb6-aa9f-222edc7ae062.jpg',
      features: ['Дизайнерский ремонт', 'Панорамные окна', 'Консьерж']
    },
    {
      id: 2,
      title: 'Студия с видом на город',
      price: '55 000',
      location: 'СПб, Невский проспект',
      rooms: 1,
      area: 45,
      image: '/img/d318ff9b-1d8f-4315-8e19-6bc0bc8ff1f5.jpg',
      features: ['Евроремонт', 'Техника', 'Метро 2 мин']
    },
    {
      id: 3,
      title: 'Семейная 3-комнатная',
      price: '95 000',
      location: 'Москва, Сокольники',
      rooms: 3,
      area: 89,
      image: '/img/9c90844d-f1eb-4415-8353-8034a2f7281b.jpg',
      features: ['Школа рядом', 'Паркинг', 'Балкон']
    }
  ]

  const features = [
    {
      icon: 'Shield',
      title: 'Проверенные объявления',
      description: 'Все объекты проходят тщательную проверку перед публикацией'
    },
    {
      icon: 'Clock',
      title: 'Быстрый поиск',
      description: 'Находите идеальное жильё за считанные минуты'
    },
    {
      icon: 'Heart',
      title: 'Избранное',
      description: 'Сохраняйте понравившиеся варианты в личном кабинете'
    },
    {
      icon: 'Phone',
      title: 'Поддержка 24/7',
      description: 'Наша команда готова помочь в любое время'
    }
  ]

  const steps = [
    {
      number: '01',
      title: 'Найдите',
      description: 'Используйте фильтры для поиска подходящих вариантов'
    },
    {
      number: '02',
      title: 'Свяжитесь',
      description: 'Звоните или пишите собственнику напрямую'
    },
    {
      number: '03',
      title: 'Заселяйтесь',
      description: 'Оформляете договор и заселяетесь в новый дом'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-primary">ДомОК</div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Каталог</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
              <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                <Icon name="Plus" size={16} className="mr-2" />
                Разместить
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Найдите свой <span className="text-primary">идеальный дом</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Тысячи проверенных объявлений об аренде жилья и коммерческой недвижимости
            </p>
            
            {/* Search Form */}
            <Card className="p-6 shadow-xl border-0">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Город</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите город" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moscow">Москва</SelectItem>
                      <SelectItem value="spb">Санкт-Петербург</SelectItem>
                      <SelectItem value="ekb">Екатеринбург</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Тип жилья</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Любой тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Квартира</SelectItem>
                      <SelectItem value="room">Комната</SelectItem>
                      <SelectItem value="house">Дом</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Цена до</label>
                  <Input placeholder="100 000 ₽" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Комнаты</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Любое" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button size="lg" className="w-full mt-6 h-12 text-lg">
                <Icon name="Search" size={20} className="mr-2" />
                Найти жильё
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Популярные предложения</h2>
            <p className="text-muted-foreground">Лучшие варианты от проверенных собственников</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {popularProperties.map((property) => (
              <Card key={property.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-secondary">
                    <Icon name="Heart" size={14} className="mr-1" />
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{property.title}</h3>
                    <span className="text-2xl font-bold text-primary">{property.price} ₽</span>
                  </div>
                  <p className="text-muted-foreground mb-4 flex items-center">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    {property.location}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <Icon name="Home" size={16} className="mr-1" />
                      {property.rooms} комн.
                    </span>
                    <span className="flex items-center">
                      <Icon name="Square" size={16} className="mr-1" />
                      {property.area} м²
                    </span>
                  </div>
                  {property.features && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Связаться с агентом
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Как это работает</h2>
            <p className="text-muted-foreground">Простой процесс поиска и аренды жилья</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Преимущества ДомОК</h2>
            <p className="text-muted-foreground">Почему тысячи людей выбирают нас</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Начните поиск прямо сейчас!</h2>
          <p className="text-xl mb-8 text-white/90">
            Присоединяйтесь к тысячам довольных клиентов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-12 px-8">
              <Icon name="Search" size={20} className="mr-2" />
              Найти жильё
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Plus" size={20} className="mr-2" />
              Разместить объявление
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ДомОК</h3>
              <p className="text-muted-foreground text-sm">
                Лучший сервис для поиска и аренды недвижимости в России
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Каталог</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">О компании</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Контакты</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Помощь</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Как арендовать</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Правила</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@domok.ru
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 ДомОК. Все права защищены.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-primary">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}