import { Product } from "@/lib/types";
import { formatPrice, discountPercent } from "@/lib/utils";
import Button from "@/components/ui/Button";
import AffiliateDisclosure from "./AffiliateDisclosure";

export default function ProductCTA({ product }: { product: Product }) {
  const discount = discountPercent(product.price, product.originalPrice);

  return (
    <div className="rounded-2xl border border-white/10 p-6 md:p-7">
      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="font-serif text-3xl text-bone">
          {formatPrice(product.price, product.currency)}
        </span>
        {product.originalPrice && (
          <span className="text-bone/40 line-through text-lg">
            {formatPrice(product.originalPrice, product.currency)}
          </span>
        )}
        {discount && (
          <span className="bg-deal text-bone text-xs font-mono px-2.5 py-1 rounded-full">
            Save {discount}%
          </span>
        )}
      </div>
      <p className="text-bone/40 text-sm mt-2">
        Price shown may vary at checkout on {product.retailer}.
      </p>

      <Button
        href={product.affiliateUrl}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="justify-center mt-6"
        fullWidth
        magnetic={false}
      >
        Buy at {product.retailer} →
      </Button>

      <AffiliateDisclosure className="mt-4" />
    </div>
  );
}
