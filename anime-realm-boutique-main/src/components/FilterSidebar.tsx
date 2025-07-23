import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

interface FilterOptions {
  animes: string[];
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
  onlyInStock: boolean;
  onlyOnSale: boolean;
  onlyNew: boolean;
}

interface FilterSidebarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFilterChange }) => {
  const animeOptions = ["Naruto", "Dragon Ball Z", "Demon Slayer", "Attack on Titan", "My Hero Academia", "One Piece", "Jujutsu Kaisen", "Tokyo Ghoul"];
  const categoryOptions = ["Figures", "Apparel", "Posters", "Collectibles", "Manga", "Accessories"];

  const handleAnimeChange = (anime: string, checked: boolean) => {
    let updatedAnimes = [...filters.animes];
    
    if (checked && !updatedAnimes.includes(anime)) {
      updatedAnimes.push(anime);
    } else if (!checked && updatedAnimes.includes(anime)) {
      updatedAnimes = updatedAnimes.filter(item => item !== anime);
    }
    
    onFilterChange({
      ...filters,
      animes: updatedAnimes
    });
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    let updatedCategories = [...filters.categories];
    
    if (checked && !updatedCategories.includes(category)) {
      updatedCategories.push(category);
    } else if (!checked && updatedCategories.includes(category)) {
      updatedCategories = updatedCategories.filter(item => item !== category);
    }
    
    onFilterChange({
      ...filters,
      categories: updatedCategories
    });
  };

  const handlePriceChange = (min: number, max: number) => {
    onFilterChange({
      ...filters,
      priceRange: { min, max }
    });
  };

  const handleCheckboxChange = (key: 'onlyInStock' | 'onlyOnSale' | 'onlyNew', checked: boolean) => {
    onFilterChange({
      ...filters,
      [key]: checked
    });
  };

  const clearFilters = () => {
    onFilterChange({
      animes: [],
      categories: [],
      priceRange: { min: 0, max: 200 },
      onlyInStock: false,
      onlyOnSale: false,
      onlyNew: false
    });
  };

  return (
    <div className="w-full space-y-6 bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={clearFilters}>Clear All</Button>
      </div>

      <div className="space-y-4">
        {/* Price Range Filter */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full justify-between items-center">
            <h3 className="text-md font-semibold">Price Range</h3>
            <ChevronDown className="h-5 w-5" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Input 
                  type="number" 
                  placeholder="Min" 
                  min={0}
                  value={filters.priceRange.min} 
                  onChange={(e) => handlePriceChange(Number(e.target.value), filters.priceRange.max)}
                />
                <span>to</span>
                <Input 
                  type="number" 
                  placeholder="Max" 
                  min={0}
                  value={filters.priceRange.max} 
                  onChange={(e) => handlePriceChange(filters.priceRange.min, Number(e.target.value))}
                />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        {/* Anime Filter */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full justify-between items-center">
            <h3 className="text-md font-semibold">Anime Series</h3>
            <ChevronDown className="h-5 w-5" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            <div className="space-y-2">
              {animeOptions.map((anime) => (
                <div key={anime} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`anime-${anime}`} 
                    checked={filters.animes.includes(anime)}
                    onCheckedChange={(checked) => handleAnimeChange(anime, checked === true)}
                  />
                  <Label htmlFor={`anime-${anime}`}>{anime}</Label>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        {/* Category Filter */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full justify-between items-center">
            <h3 className="text-md font-semibold">Category</h3>
            <ChevronDown className="h-5 w-5" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            <div className="space-y-2">
              {categoryOptions.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category}`} 
                    checked={filters.categories.includes(category)}
                    onCheckedChange={(checked) => handleCategoryChange(category, checked === true)}
                  />
                  <Label htmlFor={`category-${category}`}>{category}</Label>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        {/* Other Filters */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full justify-between items-center">
            <h3 className="text-md font-semibold">Availability</h3>
            <ChevronDown className="h-5 w-5" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="in-stock" 
                  checked={filters.onlyInStock}
                  onCheckedChange={(checked) => handleCheckboxChange('onlyInStock', checked === true)}
                />
                <Label htmlFor="in-stock">In Stock Only</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="on-sale" 
                  checked={filters.onlyOnSale}
                  onCheckedChange={(checked) => handleCheckboxChange('onlyOnSale', checked === true)}
                />
                <Label htmlFor="on-sale">On Sale</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="new-arrivals" 
                  checked={filters.onlyNew}
                  onCheckedChange={(checked) => handleCheckboxChange('onlyNew', checked === true)}
                />
                <Label htmlFor="new-arrivals">New Arrivals</Label>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default FilterSidebar;
