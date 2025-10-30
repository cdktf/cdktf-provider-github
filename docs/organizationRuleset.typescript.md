# `organizationRuleset` Submodule <a name="`organizationRuleset` Submodule" id="@cdktf/provider-github.organizationRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationRuleset <a name="OrganizationRuleset" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset github_organization_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRuleset(scope: Construct, id: string, config: OrganizationRulesetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig">OrganizationRulesetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig">OrganizationRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putBypassActors">putBypassActors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetBypassActors">resetBypassActors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBypassActors` <a name="putBypassActors" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putBypassActors"></a>

```typescript
public putBypassActors(value: IResolvable | OrganizationRulesetBypassActors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putBypassActors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>[]

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putConditions"></a>

```typescript
public putConditions(value: OrganizationRulesetConditions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a>

---

##### `putRules` <a name="putRules" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules"></a>

```typescript
public putRules(value: OrganizationRulesetRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a>

---

##### `resetBypassActors` <a name="resetBypassActors" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetBypassActors"></a>

```typescript
public resetBypassActors(): void
```

##### `resetConditions` <a name="resetConditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrganizationRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isConstruct"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

organizationRuleset.OrganizationRuleset.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformElement"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

organizationRuleset.OrganizationRuleset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformResource"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

organizationRuleset.OrganizationRuleset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

organizationRuleset.OrganizationRuleset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OrganizationRuleset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrganizationRuleset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrganizationRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.bypassActors">bypassActors</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList">OrganizationRulesetBypassActorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference">OrganizationRulesetConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.nodeId">nodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference">OrganizationRulesetRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rulesetId">rulesetId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.bypassActorsInput">bypassActorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.conditionsInput">conditionsInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.enforcementInput">enforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rulesInput">rulesInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.enforcement">enforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bypassActors`<sup>Required</sup> <a name="bypassActors" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.bypassActors"></a>

```typescript
public readonly bypassActors: OrganizationRulesetBypassActorsList;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList">OrganizationRulesetBypassActorsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.conditions"></a>

```typescript
public readonly conditions: OrganizationRulesetConditionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference">OrganizationRulesetConditionsOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rules"></a>

```typescript
public readonly rules: OrganizationRulesetRulesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference">OrganizationRulesetRulesOutputReference</a>

---

##### `rulesetId`<sup>Required</sup> <a name="rulesetId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rulesetId"></a>

```typescript
public readonly rulesetId: number;
```

- *Type:* number

---

##### `bypassActorsInput`<sup>Optional</sup> <a name="bypassActorsInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.bypassActorsInput"></a>

```typescript
public readonly bypassActorsInput: IResolvable | OrganizationRulesetBypassActors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>[]

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: OrganizationRulesetConditions;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a>

---

##### `enforcementInput`<sup>Optional</sup> <a name="enforcementInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.enforcementInput"></a>

```typescript
public readonly enforcementInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rulesInput"></a>

```typescript
public readonly rulesInput: OrganizationRulesetRules;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `enforcement`<sup>Required</sup> <a name="enforcement" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.enforcement"></a>

```typescript
public readonly enforcement: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationRulesetBypassActors <a name="OrganizationRulesetBypassActors" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetBypassActors: organizationRuleset.OrganizationRulesetBypassActors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.actorType">actorType</a></code> | <code>string</code> | The type of actor that can bypass a ruleset. See https://docs.github.com/en/rest/orgs/rules for more information. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.bypassMode">bypassMode</a></code> | <code>string</code> | When the specified actor can bypass the ruleset. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.actorId">actorId</a></code> | <code>number</code> | The ID of the actor that can bypass a ruleset. |

---

##### `actorType`<sup>Required</sup> <a name="actorType" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.actorType"></a>

```typescript
public readonly actorType: string;
```

- *Type:* string

The type of actor that can bypass a ruleset. See https://docs.github.com/en/rest/orgs/rules for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#actor_type OrganizationRuleset#actor_type}

---

##### `bypassMode`<sup>Required</sup> <a name="bypassMode" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.bypassMode"></a>

```typescript
public readonly bypassMode: string;
```

- *Type:* string

When the specified actor can bypass the ruleset.

pull_request means that an actor can only bypass rules on pull requests. Can be one of: `always`, `pull_request`, `exempt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#bypass_mode OrganizationRuleset#bypass_mode}

---

##### `actorId`<sup>Optional</sup> <a name="actorId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.actorId"></a>

```typescript
public readonly actorId: number;
```

- *Type:* number

The ID of the actor that can bypass a ruleset.

When `actor_type` is `OrganizationAdmin`, this should be set to `1`. Some resources such as DeployKey do not have an ID and this should be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#actor_id OrganizationRuleset#actor_id}

---

### OrganizationRulesetConditions <a name="OrganizationRulesetConditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetConditions: organizationRuleset.OrganizationRulesetConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.refName">refName</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a></code> | ref_name block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.repositoryId">repositoryId</a></code> | <code>number[]</code> | The repository IDs that the ruleset applies to. One of these IDs must match for the condition to pass. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.repositoryName">repositoryName</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a></code> | repository_name block. |

---

##### `refName`<sup>Required</sup> <a name="refName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.refName"></a>

```typescript
public readonly refName: OrganizationRulesetConditionsRefName;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a>

ref_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#ref_name OrganizationRuleset#ref_name}

---

##### `repositoryId`<sup>Optional</sup> <a name="repositoryId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.repositoryId"></a>

```typescript
public readonly repositoryId: number[];
```

- *Type:* number[]

The repository IDs that the ruleset applies to. One of these IDs must match for the condition to pass.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#repository_id OrganizationRuleset#repository_id}

---

##### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.repositoryName"></a>

```typescript
public readonly repositoryName: OrganizationRulesetConditionsRepositoryName;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a>

repository_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#repository_name OrganizationRuleset#repository_name}

---

### OrganizationRulesetConditionsRefName <a name="OrganizationRulesetConditionsRefName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetConditionsRefName: organizationRuleset.OrganizationRulesetConditionsRefName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.property.exclude">exclude</a></code> | <code>string[]</code> | Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.property.include">include</a></code> | <code>string[]</code> | Array of ref names or patterns to include. |

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

Array of ref names or patterns to include.

One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#include OrganizationRuleset#include}

---

### OrganizationRulesetConditionsRepositoryName <a name="OrganizationRulesetConditionsRepositoryName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetConditionsRepositoryName: organizationRuleset.OrganizationRulesetConditionsRepositoryName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.exclude">exclude</a></code> | <code>string[]</code> | Array of repository names or patterns to exclude. The condition will not pass if any of these patterns match. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.include">include</a></code> | <code>string[]</code> | Array of repository names or patterns to include. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.protected">protected</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether renaming of target repositories is prevented. |

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

Array of repository names or patterns to exclude. The condition will not pass if any of these patterns match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

Array of repository names or patterns to include.

One of these patterns must match for the condition to pass. Also accepts `~ALL` to include all repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#include OrganizationRuleset#include}

---

##### `protected`<sup>Optional</sup> <a name="protected" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.protected"></a>

```typescript
public readonly protected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether renaming of target repositories is prevented.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#protected OrganizationRuleset#protected}

---

### OrganizationRulesetConfig <a name="OrganizationRulesetConfig" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetConfig: organizationRuleset.OrganizationRulesetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.enforcement">enforcement</a></code> | <code>string</code> | Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.name">name</a></code> | <code>string</code> | The name of the ruleset. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a></code> | rules block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.target">target</a></code> | <code>string</code> | Possible values are `branch`, `tag` and `push`. Note: The `push` target is in beta and is subject to change. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.bypassActors">bypassActors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>[]</code> | bypass_actors block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#id OrganizationRuleset#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enforcement`<sup>Required</sup> <a name="enforcement" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.enforcement"></a>

```typescript
public readonly enforcement: string;
```

- *Type:* string

Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#enforcement OrganizationRuleset#enforcement}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.rules"></a>

```typescript
public readonly rules: OrganizationRulesetRules;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#rules OrganizationRuleset#rules}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Possible values are `branch`, `tag` and `push`. Note: The `push` target is in beta and is subject to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#target OrganizationRuleset#target}

---

##### `bypassActors`<sup>Optional</sup> <a name="bypassActors" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.bypassActors"></a>

```typescript
public readonly bypassActors: IResolvable | OrganizationRulesetBypassActors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>[]

bypass_actors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#bypass_actors OrganizationRuleset#bypass_actors}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.conditions"></a>

```typescript
public readonly conditions: OrganizationRulesetConditions;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#conditions OrganizationRuleset#conditions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#id OrganizationRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OrganizationRulesetRules <a name="OrganizationRulesetRules" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetRules: organizationRuleset.OrganizationRulesetRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.branchNamePattern">branchNamePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a></code> | branch_name_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.commitAuthorEmailPattern">commitAuthorEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a></code> | commit_author_email_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.commitMessagePattern">commitMessagePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a></code> | commit_message_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.committerEmailPattern">committerEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a></code> | committer_email_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.creation">creation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Only allow users with bypass permission to create matching refs. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.deletion">deletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Only allow users with bypass permissions to delete matching refs. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.nonFastForward">nonFastForward</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prevent users with push access from force pushing to branches. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredCodeScanning">requiredCodeScanning</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a></code> | required_code_scanning block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredLinearHistory">requiredLinearHistory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prevent merge commits from being pushed to matching branches. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredSignatures">requiredSignatures</a></code> | <code>boolean \| cdktf.IResolvable</code> | Commits pushed to matching branches must have verified signatures. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredStatusChecks">requiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a></code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredWorkflows">requiredWorkflows</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a></code> | required_workflows block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.tagNamePattern">tagNamePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a></code> | tag_name_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.update">update</a></code> | <code>boolean \| cdktf.IResolvable</code> | Only allow users with bypass permission to update matching refs. |

---

##### `branchNamePattern`<sup>Optional</sup> <a name="branchNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.branchNamePattern"></a>

```typescript
public readonly branchNamePattern: OrganizationRulesetRulesBranchNamePattern;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a>

branch_name_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#branch_name_pattern OrganizationRuleset#branch_name_pattern}

---

##### `commitAuthorEmailPattern`<sup>Optional</sup> <a name="commitAuthorEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.commitAuthorEmailPattern"></a>

```typescript
public readonly commitAuthorEmailPattern: OrganizationRulesetRulesCommitAuthorEmailPattern;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a>

commit_author_email_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#commit_author_email_pattern OrganizationRuleset#commit_author_email_pattern}

---

##### `commitMessagePattern`<sup>Optional</sup> <a name="commitMessagePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.commitMessagePattern"></a>

```typescript
public readonly commitMessagePattern: OrganizationRulesetRulesCommitMessagePattern;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a>

commit_message_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#commit_message_pattern OrganizationRuleset#commit_message_pattern}

---

##### `committerEmailPattern`<sup>Optional</sup> <a name="committerEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.committerEmailPattern"></a>

```typescript
public readonly committerEmailPattern: OrganizationRulesetRulesCommitterEmailPattern;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a>

committer_email_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#committer_email_pattern OrganizationRuleset#committer_email_pattern}

---

##### `creation`<sup>Optional</sup> <a name="creation" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.creation"></a>

```typescript
public readonly creation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Only allow users with bypass permission to create matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#creation OrganizationRuleset#creation}

---

##### `deletion`<sup>Optional</sup> <a name="deletion" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.deletion"></a>

```typescript
public readonly deletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Only allow users with bypass permissions to delete matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#deletion OrganizationRuleset#deletion}

---

##### `nonFastForward`<sup>Optional</sup> <a name="nonFastForward" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.nonFastForward"></a>

```typescript
public readonly nonFastForward: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prevent users with push access from force pushing to branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#non_fast_forward OrganizationRuleset#non_fast_forward}

---

##### `pullRequest`<sup>Optional</sup> <a name="pullRequest" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.pullRequest"></a>

```typescript
public readonly pullRequest: OrganizationRulesetRulesPullRequest;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#pull_request OrganizationRuleset#pull_request}

---

##### `requiredCodeScanning`<sup>Optional</sup> <a name="requiredCodeScanning" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredCodeScanning"></a>

```typescript
public readonly requiredCodeScanning: OrganizationRulesetRulesRequiredCodeScanning;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a>

required_code_scanning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#required_code_scanning OrganizationRuleset#required_code_scanning}

---

##### `requiredLinearHistory`<sup>Optional</sup> <a name="requiredLinearHistory" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredLinearHistory"></a>

```typescript
public readonly requiredLinearHistory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prevent merge commits from being pushed to matching branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#required_linear_history OrganizationRuleset#required_linear_history}

---

##### `requiredSignatures`<sup>Optional</sup> <a name="requiredSignatures" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredSignatures"></a>

```typescript
public readonly requiredSignatures: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Commits pushed to matching branches must have verified signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#required_signatures OrganizationRuleset#required_signatures}

---

##### `requiredStatusChecks`<sup>Optional</sup> <a name="requiredStatusChecks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredStatusChecks"></a>

```typescript
public readonly requiredStatusChecks: OrganizationRulesetRulesRequiredStatusChecks;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a>

required_status_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#required_status_checks OrganizationRuleset#required_status_checks}

---

##### `requiredWorkflows`<sup>Optional</sup> <a name="requiredWorkflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredWorkflows"></a>

```typescript
public readonly requiredWorkflows: OrganizationRulesetRulesRequiredWorkflows;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a>

required_workflows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#required_workflows OrganizationRuleset#required_workflows}

---

##### `tagNamePattern`<sup>Optional</sup> <a name="tagNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.tagNamePattern"></a>

```typescript
public readonly tagNamePattern: OrganizationRulesetRulesTagNamePattern;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a>

tag_name_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#tag_name_pattern OrganizationRuleset#tag_name_pattern}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.update"></a>

```typescript
public readonly update: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Only allow users with bypass permission to update matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#update OrganizationRuleset#update}

---

### OrganizationRulesetRulesBranchNamePattern <a name="OrganizationRulesetRulesBranchNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetRulesBranchNamePattern: organizationRuleset.OrganizationRulesetRulesBranchNamePattern = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.operator">operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.pattern">pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.name">name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

### OrganizationRulesetRulesCommitAuthorEmailPattern <a name="OrganizationRulesetRulesCommitAuthorEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetRulesCommitAuthorEmailPattern: organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.operator">operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.pattern">pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.name">name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

### OrganizationRulesetRulesCommitMessagePattern <a name="OrganizationRulesetRulesCommitMessagePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetRulesCommitMessagePattern: organizationRuleset.OrganizationRulesetRulesCommitMessagePattern = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.operator">operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.pattern">pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.name">name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

### OrganizationRulesetRulesCommitterEmailPattern <a name="OrganizationRulesetRulesCommitterEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetRulesCommitterEmailPattern: organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.operator">operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.pattern">pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.name">name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

### OrganizationRulesetRulesPullRequest <a name="OrganizationRulesetRulesPullRequest" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetRulesPullRequest: organizationRuleset.OrganizationRulesetRulesPullRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.dismissStaleReviewsOnPush">dismissStaleReviewsOnPush</a></code> | <code>boolean \| cdktf.IResolvable</code> | New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requireCodeOwnerReview">requireCodeOwnerReview</a></code> | <code>boolean \| cdktf.IResolvable</code> | Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requiredApprovingReviewCount">requiredApprovingReviewCount</a></code> | <code>number</code> | The number of approving reviews that are required before a pull request can be merged. Defaults to `0`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requiredReviewThreadResolution">requiredReviewThreadResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | All conversations on code must be resolved before a pull request can be merged. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requireLastPushApproval">requireLastPushApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the most recent reviewable push must be approved by someone other than the person who pushed it. |

---

##### `dismissStaleReviewsOnPush`<sup>Optional</sup> <a name="dismissStaleReviewsOnPush" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.dismissStaleReviewsOnPush"></a>

```typescript
public readonly dismissStaleReviewsOnPush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#dismiss_stale_reviews_on_push OrganizationRuleset#dismiss_stale_reviews_on_push}

---

##### `requireCodeOwnerReview`<sup>Optional</sup> <a name="requireCodeOwnerReview" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requireCodeOwnerReview"></a>

```typescript
public readonly requireCodeOwnerReview: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#require_code_owner_review OrganizationRuleset#require_code_owner_review}

---

##### `requiredApprovingReviewCount`<sup>Optional</sup> <a name="requiredApprovingReviewCount" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requiredApprovingReviewCount"></a>

```typescript
public readonly requiredApprovingReviewCount: number;
```

- *Type:* number

The number of approving reviews that are required before a pull request can be merged. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#required_approving_review_count OrganizationRuleset#required_approving_review_count}

---

##### `requiredReviewThreadResolution`<sup>Optional</sup> <a name="requiredReviewThreadResolution" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requiredReviewThreadResolution"></a>

```typescript
public readonly requiredReviewThreadResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

All conversations on code must be resolved before a pull request can be merged. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#required_review_thread_resolution OrganizationRuleset#required_review_thread_resolution}

---

##### `requireLastPushApproval`<sup>Optional</sup> <a name="requireLastPushApproval" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requireLastPushApproval"></a>

```typescript
public readonly requireLastPushApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the most recent reviewable push must be approved by someone other than the person who pushed it.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#require_last_push_approval OrganizationRuleset#require_last_push_approval}

---

### OrganizationRulesetRulesRequiredCodeScanning <a name="OrganizationRulesetRulesRequiredCodeScanning" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetRulesRequiredCodeScanning: organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning.property.requiredCodeScanningTool">requiredCodeScanningTool</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>[]</code> | required_code_scanning_tool block. |

---

##### `requiredCodeScanningTool`<sup>Required</sup> <a name="requiredCodeScanningTool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning.property.requiredCodeScanningTool"></a>

```typescript
public readonly requiredCodeScanningTool: IResolvable | OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>[]

required_code_scanning_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#required_code_scanning_tool OrganizationRuleset#required_code_scanning_tool}

---

### OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool <a name="OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool: organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.alertsThreshold">alertsThreshold</a></code> | <code>string</code> | The severity level at which code scanning results that raise alerts block a reference update. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.securityAlertsThreshold">securityAlertsThreshold</a></code> | <code>string</code> | The severity level at which code scanning results that raise security alerts block a reference update. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.tool">tool</a></code> | <code>string</code> | The name of a code scanning tool. |

---

##### `alertsThreshold`<sup>Required</sup> <a name="alertsThreshold" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.alertsThreshold"></a>

```typescript
public readonly alertsThreshold: string;
```

- *Type:* string

The severity level at which code scanning results that raise alerts block a reference update.

Can be one of: `none`, `errors`, `errors_and_warnings`, `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#alerts_threshold OrganizationRuleset#alerts_threshold}

---

##### `securityAlertsThreshold`<sup>Required</sup> <a name="securityAlertsThreshold" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.securityAlertsThreshold"></a>

```typescript
public readonly securityAlertsThreshold: string;
```

- *Type:* string

The severity level at which code scanning results that raise security alerts block a reference update.

Can be one of: `none`, `critical`, `high_or_higher`, `medium_or_higher`, `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#security_alerts_threshold OrganizationRuleset#security_alerts_threshold}

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

The name of a code scanning tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#tool OrganizationRuleset#tool}

---

### OrganizationRulesetRulesRequiredStatusChecks <a name="OrganizationRulesetRulesRequiredStatusChecks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetRulesRequiredStatusChecks: organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.requiredCheck">requiredCheck</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>[]</code> | required_check block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.doNotEnforceOnCreate">doNotEnforceOnCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow repositories and branches to be created if a check would otherwise prohibit it. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.strictRequiredStatusChecksPolicy">strictRequiredStatusChecksPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether pull requests targeting a matching branch must be tested with the latest code. |

---

##### `requiredCheck`<sup>Required</sup> <a name="requiredCheck" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.requiredCheck"></a>

```typescript
public readonly requiredCheck: IResolvable | OrganizationRulesetRulesRequiredStatusChecksRequiredCheck[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>[]

required_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#required_check OrganizationRuleset#required_check}

---

##### `doNotEnforceOnCreate`<sup>Optional</sup> <a name="doNotEnforceOnCreate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.doNotEnforceOnCreate"></a>

```typescript
public readonly doNotEnforceOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow repositories and branches to be created if a check would otherwise prohibit it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#do_not_enforce_on_create OrganizationRuleset#do_not_enforce_on_create}

---

##### `strictRequiredStatusChecksPolicy`<sup>Optional</sup> <a name="strictRequiredStatusChecksPolicy" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.strictRequiredStatusChecksPolicy"></a>

```typescript
public readonly strictRequiredStatusChecksPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether pull requests targeting a matching branch must be tested with the latest code.

This setting will not take effect unless at least one status check is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#strict_required_status_checks_policy OrganizationRuleset#strict_required_status_checks_policy}

---

### OrganizationRulesetRulesRequiredStatusChecksRequiredCheck <a name="OrganizationRulesetRulesRequiredStatusChecksRequiredCheck" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetRulesRequiredStatusChecksRequiredCheck: organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.property.context">context</a></code> | <code>string</code> | The status check context name that must be present on the commit. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.property.integrationId">integrationId</a></code> | <code>number</code> | The optional integration ID that this status check must originate from. |

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

The status check context name that must be present on the commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#context OrganizationRuleset#context}

---

##### `integrationId`<sup>Optional</sup> <a name="integrationId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.property.integrationId"></a>

```typescript
public readonly integrationId: number;
```

- *Type:* number

The optional integration ID that this status check must originate from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#integration_id OrganizationRuleset#integration_id}

---

### OrganizationRulesetRulesRequiredWorkflows <a name="OrganizationRulesetRulesRequiredWorkflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetRulesRequiredWorkflows: organizationRuleset.OrganizationRulesetRulesRequiredWorkflows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.property.requiredWorkflow">requiredWorkflow</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>[]</code> | required_workflow block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.property.doNotEnforceOnCreate">doNotEnforceOnCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow repositories and branches to be created if a check would otherwise prohibit it. |

---

##### `requiredWorkflow`<sup>Required</sup> <a name="requiredWorkflow" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.property.requiredWorkflow"></a>

```typescript
public readonly requiredWorkflow: IResolvable | OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>[]

required_workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#required_workflow OrganizationRuleset#required_workflow}

---

##### `doNotEnforceOnCreate`<sup>Optional</sup> <a name="doNotEnforceOnCreate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.property.doNotEnforceOnCreate"></a>

```typescript
public readonly doNotEnforceOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow repositories and branches to be created if a check would otherwise prohibit it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#do_not_enforce_on_create OrganizationRuleset#do_not_enforce_on_create}

---

### OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow <a name="OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetRulesRequiredWorkflowsRequiredWorkflow: organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.path">path</a></code> | <code>string</code> | The path to the workflow YAML definition file. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.repositoryId">repositoryId</a></code> | <code>number</code> | The repository in which the workflow is defined. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.ref">ref</a></code> | <code>string</code> | The ref (branch or tag) of the workflow file to use. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to the workflow YAML definition file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#path OrganizationRuleset#path}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.repositoryId"></a>

```typescript
public readonly repositoryId: number;
```

- *Type:* number

The repository in which the workflow is defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#repository_id OrganizationRuleset#repository_id}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

The ref (branch or tag) of the workflow file to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#ref OrganizationRuleset#ref}

---

### OrganizationRulesetRulesTagNamePattern <a name="OrganizationRulesetRulesTagNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

const organizationRulesetRulesTagNamePattern: organizationRuleset.OrganizationRulesetRulesTagNamePattern = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.operator">operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.pattern">pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.name">name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationRulesetBypassActorsList <a name="OrganizationRulesetBypassActorsList" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetBypassActorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.get"></a>

```typescript
public get(index: number): OrganizationRulesetBypassActorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrganizationRulesetBypassActors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>[]

---


### OrganizationRulesetBypassActorsOutputReference <a name="OrganizationRulesetBypassActorsOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetBypassActorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resetActorId">resetActorId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActorId` <a name="resetActorId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resetActorId"></a>

```typescript
public resetActorId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorIdInput">actorIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorTypeInput">actorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.bypassModeInput">bypassModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorId">actorId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorType">actorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.bypassMode">bypassMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actorIdInput`<sup>Optional</sup> <a name="actorIdInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorIdInput"></a>

```typescript
public readonly actorIdInput: number;
```

- *Type:* number

---

##### `actorTypeInput`<sup>Optional</sup> <a name="actorTypeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorTypeInput"></a>

```typescript
public readonly actorTypeInput: string;
```

- *Type:* string

---

##### `bypassModeInput`<sup>Optional</sup> <a name="bypassModeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.bypassModeInput"></a>

```typescript
public readonly bypassModeInput: string;
```

- *Type:* string

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorId"></a>

```typescript
public readonly actorId: number;
```

- *Type:* number

---

##### `actorType`<sup>Required</sup> <a name="actorType" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorType"></a>

```typescript
public readonly actorType: string;
```

- *Type:* string

---

##### `bypassMode`<sup>Required</sup> <a name="bypassMode" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.bypassMode"></a>

```typescript
public readonly bypassMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrganizationRulesetBypassActors;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>

---


### OrganizationRulesetConditionsOutputReference <a name="OrganizationRulesetConditionsOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRefName">putRefName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRepositoryName">putRepositoryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resetRepositoryId">resetRepositoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resetRepositoryName">resetRepositoryName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRefName` <a name="putRefName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRefName"></a>

```typescript
public putRefName(value: OrganizationRulesetConditionsRefName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRefName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a>

---

##### `putRepositoryName` <a name="putRepositoryName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRepositoryName"></a>

```typescript
public putRepositoryName(value: OrganizationRulesetConditionsRepositoryName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRepositoryName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a>

---

##### `resetRepositoryId` <a name="resetRepositoryId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resetRepositoryId"></a>

```typescript
public resetRepositoryId(): void
```

##### `resetRepositoryName` <a name="resetRepositoryName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resetRepositoryName"></a>

```typescript
public resetRepositoryName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.refName">refName</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference">OrganizationRulesetConditionsRefNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryName">repositoryName</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference">OrganizationRulesetConditionsRepositoryNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.refNameInput">refNameInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryIdInput">repositoryIdInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryNameInput">repositoryNameInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryId">repositoryId</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `refName`<sup>Required</sup> <a name="refName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.refName"></a>

```typescript
public readonly refName: OrganizationRulesetConditionsRefNameOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference">OrganizationRulesetConditionsRefNameOutputReference</a>

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryName"></a>

```typescript
public readonly repositoryName: OrganizationRulesetConditionsRepositoryNameOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference">OrganizationRulesetConditionsRepositoryNameOutputReference</a>

---

##### `refNameInput`<sup>Optional</sup> <a name="refNameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.refNameInput"></a>

```typescript
public readonly refNameInput: OrganizationRulesetConditionsRefName;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a>

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: number[];
```

- *Type:* number[]

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryNameInput"></a>

```typescript
public readonly repositoryNameInput: OrganizationRulesetConditionsRepositoryName;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a>

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryId"></a>

```typescript
public readonly repositoryId: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationRulesetConditions;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a>

---


### OrganizationRulesetConditionsRefNameOutputReference <a name="OrganizationRulesetConditionsRefNameOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.excludeInput">excludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.includeInput">includeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.excludeInput"></a>

```typescript
public readonly excludeInput: string[];
```

- *Type:* string[]

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: string[];
```

- *Type:* string[]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationRulesetConditionsRefName;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a>

---


### OrganizationRulesetConditionsRepositoryNameOutputReference <a name="OrganizationRulesetConditionsRepositoryNameOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resetProtected">resetProtected</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProtected` <a name="resetProtected" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resetProtected"></a>

```typescript
public resetProtected(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.excludeInput">excludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.includeInput">includeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.protectedInput">protectedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.protected">protected</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.excludeInput"></a>

```typescript
public readonly excludeInput: string[];
```

- *Type:* string[]

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: string[];
```

- *Type:* string[]

---

##### `protectedInput`<sup>Optional</sup> <a name="protectedInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.protectedInput"></a>

```typescript
public readonly protectedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `protected`<sup>Required</sup> <a name="protected" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.protected"></a>

```typescript
public readonly protected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationRulesetConditionsRepositoryName;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a>

---


### OrganizationRulesetRulesBranchNamePatternOutputReference <a name="OrganizationRulesetRulesBranchNamePatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resetNegate">resetNegate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationRulesetRulesBranchNamePattern;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a>

---


### OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference <a name="OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resetNegate">resetNegate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationRulesetRulesCommitAuthorEmailPattern;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a>

---


### OrganizationRulesetRulesCommitMessagePatternOutputReference <a name="OrganizationRulesetRulesCommitMessagePatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resetNegate">resetNegate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationRulesetRulesCommitMessagePattern;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a>

---


### OrganizationRulesetRulesCommitterEmailPatternOutputReference <a name="OrganizationRulesetRulesCommitterEmailPatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resetNegate">resetNegate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationRulesetRulesCommitterEmailPattern;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a>

---


### OrganizationRulesetRulesOutputReference <a name="OrganizationRulesetRulesOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putBranchNamePattern">putBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitAuthorEmailPattern">putCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitMessagePattern">putCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitterEmailPattern">putCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putPullRequest">putPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredCodeScanning">putRequiredCodeScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredStatusChecks">putRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredWorkflows">putRequiredWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putTagNamePattern">putTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetBranchNamePattern">resetBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitAuthorEmailPattern">resetCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitMessagePattern">resetCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitterEmailPattern">resetCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCreation">resetCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetDeletion">resetDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetNonFastForward">resetNonFastForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetPullRequest">resetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredCodeScanning">resetRequiredCodeScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredLinearHistory">resetRequiredLinearHistory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredSignatures">resetRequiredSignatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredStatusChecks">resetRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredWorkflows">resetRequiredWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetTagNamePattern">resetTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBranchNamePattern` <a name="putBranchNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putBranchNamePattern"></a>

```typescript
public putBranchNamePattern(value: OrganizationRulesetRulesBranchNamePattern): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putBranchNamePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a>

---

##### `putCommitAuthorEmailPattern` <a name="putCommitAuthorEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitAuthorEmailPattern"></a>

```typescript
public putCommitAuthorEmailPattern(value: OrganizationRulesetRulesCommitAuthorEmailPattern): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitAuthorEmailPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a>

---

##### `putCommitMessagePattern` <a name="putCommitMessagePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitMessagePattern"></a>

```typescript
public putCommitMessagePattern(value: OrganizationRulesetRulesCommitMessagePattern): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitMessagePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a>

---

##### `putCommitterEmailPattern` <a name="putCommitterEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitterEmailPattern"></a>

```typescript
public putCommitterEmailPattern(value: OrganizationRulesetRulesCommitterEmailPattern): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitterEmailPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a>

---

##### `putPullRequest` <a name="putPullRequest" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putPullRequest"></a>

```typescript
public putPullRequest(value: OrganizationRulesetRulesPullRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putPullRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a>

---

##### `putRequiredCodeScanning` <a name="putRequiredCodeScanning" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredCodeScanning"></a>

```typescript
public putRequiredCodeScanning(value: OrganizationRulesetRulesRequiredCodeScanning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredCodeScanning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a>

---

##### `putRequiredStatusChecks` <a name="putRequiredStatusChecks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredStatusChecks"></a>

```typescript
public putRequiredStatusChecks(value: OrganizationRulesetRulesRequiredStatusChecks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredStatusChecks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a>

---

##### `putRequiredWorkflows` <a name="putRequiredWorkflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredWorkflows"></a>

```typescript
public putRequiredWorkflows(value: OrganizationRulesetRulesRequiredWorkflows): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredWorkflows.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a>

---

##### `putTagNamePattern` <a name="putTagNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putTagNamePattern"></a>

```typescript
public putTagNamePattern(value: OrganizationRulesetRulesTagNamePattern): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putTagNamePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a>

---

##### `resetBranchNamePattern` <a name="resetBranchNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetBranchNamePattern"></a>

```typescript
public resetBranchNamePattern(): void
```

##### `resetCommitAuthorEmailPattern` <a name="resetCommitAuthorEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitAuthorEmailPattern"></a>

```typescript
public resetCommitAuthorEmailPattern(): void
```

##### `resetCommitMessagePattern` <a name="resetCommitMessagePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitMessagePattern"></a>

```typescript
public resetCommitMessagePattern(): void
```

##### `resetCommitterEmailPattern` <a name="resetCommitterEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitterEmailPattern"></a>

```typescript
public resetCommitterEmailPattern(): void
```

##### `resetCreation` <a name="resetCreation" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCreation"></a>

```typescript
public resetCreation(): void
```

##### `resetDeletion` <a name="resetDeletion" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetDeletion"></a>

```typescript
public resetDeletion(): void
```

##### `resetNonFastForward` <a name="resetNonFastForward" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetNonFastForward"></a>

```typescript
public resetNonFastForward(): void
```

##### `resetPullRequest` <a name="resetPullRequest" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetPullRequest"></a>

```typescript
public resetPullRequest(): void
```

##### `resetRequiredCodeScanning` <a name="resetRequiredCodeScanning" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredCodeScanning"></a>

```typescript
public resetRequiredCodeScanning(): void
```

##### `resetRequiredLinearHistory` <a name="resetRequiredLinearHistory" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredLinearHistory"></a>

```typescript
public resetRequiredLinearHistory(): void
```

##### `resetRequiredSignatures` <a name="resetRequiredSignatures" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredSignatures"></a>

```typescript
public resetRequiredSignatures(): void
```

##### `resetRequiredStatusChecks` <a name="resetRequiredStatusChecks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredStatusChecks"></a>

```typescript
public resetRequiredStatusChecks(): void
```

##### `resetRequiredWorkflows` <a name="resetRequiredWorkflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredWorkflows"></a>

```typescript
public resetRequiredWorkflows(): void
```

##### `resetTagNamePattern` <a name="resetTagNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetTagNamePattern"></a>

```typescript
public resetTagNamePattern(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.branchNamePattern">branchNamePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference">OrganizationRulesetRulesBranchNamePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitAuthorEmailPattern">commitAuthorEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference">OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitMessagePattern">commitMessagePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference">OrganizationRulesetRulesCommitMessagePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.committerEmailPattern">committerEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference">OrganizationRulesetRulesCommitterEmailPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference">OrganizationRulesetRulesPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredCodeScanning">requiredCodeScanning</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference">OrganizationRulesetRulesRequiredCodeScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredStatusChecks">requiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference">OrganizationRulesetRulesRequiredStatusChecksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredWorkflows">requiredWorkflows</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference">OrganizationRulesetRulesRequiredWorkflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.tagNamePattern">tagNamePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference">OrganizationRulesetRulesTagNamePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.branchNamePatternInput">branchNamePatternInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitAuthorEmailPatternInput">commitAuthorEmailPatternInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitMessagePatternInput">commitMessagePatternInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.committerEmailPatternInput">committerEmailPatternInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creationInput">creationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.deletionInput">deletionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.nonFastForwardInput">nonFastForwardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.pullRequestInput">pullRequestInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredCodeScanningInput">requiredCodeScanningInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredLinearHistoryInput">requiredLinearHistoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredSignaturesInput">requiredSignaturesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredStatusChecksInput">requiredStatusChecksInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredWorkflowsInput">requiredWorkflowsInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.tagNamePatternInput">tagNamePatternInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.updateInput">updateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creation">creation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.deletion">deletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.nonFastForward">nonFastForward</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredLinearHistory">requiredLinearHistory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredSignatures">requiredSignatures</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.update">update</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchNamePattern`<sup>Required</sup> <a name="branchNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.branchNamePattern"></a>

```typescript
public readonly branchNamePattern: OrganizationRulesetRulesBranchNamePatternOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference">OrganizationRulesetRulesBranchNamePatternOutputReference</a>

---

##### `commitAuthorEmailPattern`<sup>Required</sup> <a name="commitAuthorEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitAuthorEmailPattern"></a>

```typescript
public readonly commitAuthorEmailPattern: OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference">OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference</a>

---

##### `commitMessagePattern`<sup>Required</sup> <a name="commitMessagePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitMessagePattern"></a>

```typescript
public readonly commitMessagePattern: OrganizationRulesetRulesCommitMessagePatternOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference">OrganizationRulesetRulesCommitMessagePatternOutputReference</a>

---

##### `committerEmailPattern`<sup>Required</sup> <a name="committerEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.committerEmailPattern"></a>

```typescript
public readonly committerEmailPattern: OrganizationRulesetRulesCommitterEmailPatternOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference">OrganizationRulesetRulesCommitterEmailPatternOutputReference</a>

---

##### `pullRequest`<sup>Required</sup> <a name="pullRequest" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.pullRequest"></a>

```typescript
public readonly pullRequest: OrganizationRulesetRulesPullRequestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference">OrganizationRulesetRulesPullRequestOutputReference</a>

---

##### `requiredCodeScanning`<sup>Required</sup> <a name="requiredCodeScanning" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredCodeScanning"></a>

```typescript
public readonly requiredCodeScanning: OrganizationRulesetRulesRequiredCodeScanningOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference">OrganizationRulesetRulesRequiredCodeScanningOutputReference</a>

---

##### `requiredStatusChecks`<sup>Required</sup> <a name="requiredStatusChecks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredStatusChecks"></a>

```typescript
public readonly requiredStatusChecks: OrganizationRulesetRulesRequiredStatusChecksOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference">OrganizationRulesetRulesRequiredStatusChecksOutputReference</a>

---

##### `requiredWorkflows`<sup>Required</sup> <a name="requiredWorkflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredWorkflows"></a>

```typescript
public readonly requiredWorkflows: OrganizationRulesetRulesRequiredWorkflowsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference">OrganizationRulesetRulesRequiredWorkflowsOutputReference</a>

---

##### `tagNamePattern`<sup>Required</sup> <a name="tagNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.tagNamePattern"></a>

```typescript
public readonly tagNamePattern: OrganizationRulesetRulesTagNamePatternOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference">OrganizationRulesetRulesTagNamePatternOutputReference</a>

---

##### `branchNamePatternInput`<sup>Optional</sup> <a name="branchNamePatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.branchNamePatternInput"></a>

```typescript
public readonly branchNamePatternInput: OrganizationRulesetRulesBranchNamePattern;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a>

---

##### `commitAuthorEmailPatternInput`<sup>Optional</sup> <a name="commitAuthorEmailPatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitAuthorEmailPatternInput"></a>

```typescript
public readonly commitAuthorEmailPatternInput: OrganizationRulesetRulesCommitAuthorEmailPattern;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a>

---

##### `commitMessagePatternInput`<sup>Optional</sup> <a name="commitMessagePatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitMessagePatternInput"></a>

```typescript
public readonly commitMessagePatternInput: OrganizationRulesetRulesCommitMessagePattern;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a>

---

##### `committerEmailPatternInput`<sup>Optional</sup> <a name="committerEmailPatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.committerEmailPatternInput"></a>

```typescript
public readonly committerEmailPatternInput: OrganizationRulesetRulesCommitterEmailPattern;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a>

---

##### `creationInput`<sup>Optional</sup> <a name="creationInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creationInput"></a>

```typescript
public readonly creationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionInput`<sup>Optional</sup> <a name="deletionInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.deletionInput"></a>

```typescript
public readonly deletionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nonFastForwardInput`<sup>Optional</sup> <a name="nonFastForwardInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.nonFastForwardInput"></a>

```typescript
public readonly nonFastForwardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pullRequestInput`<sup>Optional</sup> <a name="pullRequestInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.pullRequestInput"></a>

```typescript
public readonly pullRequestInput: OrganizationRulesetRulesPullRequest;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a>

---

##### `requiredCodeScanningInput`<sup>Optional</sup> <a name="requiredCodeScanningInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredCodeScanningInput"></a>

```typescript
public readonly requiredCodeScanningInput: OrganizationRulesetRulesRequiredCodeScanning;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a>

---

##### `requiredLinearHistoryInput`<sup>Optional</sup> <a name="requiredLinearHistoryInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredLinearHistoryInput"></a>

```typescript
public readonly requiredLinearHistoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredSignaturesInput`<sup>Optional</sup> <a name="requiredSignaturesInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredSignaturesInput"></a>

```typescript
public readonly requiredSignaturesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredStatusChecksInput`<sup>Optional</sup> <a name="requiredStatusChecksInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredStatusChecksInput"></a>

```typescript
public readonly requiredStatusChecksInput: OrganizationRulesetRulesRequiredStatusChecks;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a>

---

##### `requiredWorkflowsInput`<sup>Optional</sup> <a name="requiredWorkflowsInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredWorkflowsInput"></a>

```typescript
public readonly requiredWorkflowsInput: OrganizationRulesetRulesRequiredWorkflows;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a>

---

##### `tagNamePatternInput`<sup>Optional</sup> <a name="tagNamePatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.tagNamePatternInput"></a>

```typescript
public readonly tagNamePatternInput: OrganizationRulesetRulesTagNamePattern;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a>

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `creation`<sup>Required</sup> <a name="creation" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creation"></a>

```typescript
public readonly creation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletion`<sup>Required</sup> <a name="deletion" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.deletion"></a>

```typescript
public readonly deletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nonFastForward`<sup>Required</sup> <a name="nonFastForward" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.nonFastForward"></a>

```typescript
public readonly nonFastForward: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredLinearHistory`<sup>Required</sup> <a name="requiredLinearHistory" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredLinearHistory"></a>

```typescript
public readonly requiredLinearHistory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredSignatures`<sup>Required</sup> <a name="requiredSignatures" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredSignatures"></a>

```typescript
public readonly requiredSignatures: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.update"></a>

```typescript
public readonly update: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationRulesetRules;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a>

---


### OrganizationRulesetRulesPullRequestOutputReference <a name="OrganizationRulesetRulesPullRequestOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetDismissStaleReviewsOnPush">resetDismissStaleReviewsOnPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequireCodeOwnerReview">resetRequireCodeOwnerReview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequiredApprovingReviewCount">resetRequiredApprovingReviewCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequiredReviewThreadResolution">resetRequiredReviewThreadResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequireLastPushApproval">resetRequireLastPushApproval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDismissStaleReviewsOnPush` <a name="resetDismissStaleReviewsOnPush" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetDismissStaleReviewsOnPush"></a>

```typescript
public resetDismissStaleReviewsOnPush(): void
```

##### `resetRequireCodeOwnerReview` <a name="resetRequireCodeOwnerReview" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequireCodeOwnerReview"></a>

```typescript
public resetRequireCodeOwnerReview(): void
```

##### `resetRequiredApprovingReviewCount` <a name="resetRequiredApprovingReviewCount" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequiredApprovingReviewCount"></a>

```typescript
public resetRequiredApprovingReviewCount(): void
```

##### `resetRequiredReviewThreadResolution` <a name="resetRequiredReviewThreadResolution" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequiredReviewThreadResolution"></a>

```typescript
public resetRequiredReviewThreadResolution(): void
```

##### `resetRequireLastPushApproval` <a name="resetRequireLastPushApproval" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequireLastPushApproval"></a>

```typescript
public resetRequireLastPushApproval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPushInput">dismissStaleReviewsOnPushInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReviewInput">requireCodeOwnerReviewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCountInput">requiredApprovingReviewCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolutionInput">requiredReviewThreadResolutionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireLastPushApprovalInput">requireLastPushApprovalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPush">dismissStaleReviewsOnPush</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReview">requireCodeOwnerReview</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCount">requiredApprovingReviewCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolution">requiredReviewThreadResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireLastPushApproval">requireLastPushApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dismissStaleReviewsOnPushInput`<sup>Optional</sup> <a name="dismissStaleReviewsOnPushInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPushInput"></a>

```typescript
public readonly dismissStaleReviewsOnPushInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireCodeOwnerReviewInput`<sup>Optional</sup> <a name="requireCodeOwnerReviewInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReviewInput"></a>

```typescript
public readonly requireCodeOwnerReviewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredApprovingReviewCountInput`<sup>Optional</sup> <a name="requiredApprovingReviewCountInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCountInput"></a>

```typescript
public readonly requiredApprovingReviewCountInput: number;
```

- *Type:* number

---

##### `requiredReviewThreadResolutionInput`<sup>Optional</sup> <a name="requiredReviewThreadResolutionInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolutionInput"></a>

```typescript
public readonly requiredReviewThreadResolutionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireLastPushApprovalInput`<sup>Optional</sup> <a name="requireLastPushApprovalInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireLastPushApprovalInput"></a>

```typescript
public readonly requireLastPushApprovalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dismissStaleReviewsOnPush`<sup>Required</sup> <a name="dismissStaleReviewsOnPush" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPush"></a>

```typescript
public readonly dismissStaleReviewsOnPush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireCodeOwnerReview`<sup>Required</sup> <a name="requireCodeOwnerReview" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReview"></a>

```typescript
public readonly requireCodeOwnerReview: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredApprovingReviewCount`<sup>Required</sup> <a name="requiredApprovingReviewCount" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCount"></a>

```typescript
public readonly requiredApprovingReviewCount: number;
```

- *Type:* number

---

##### `requiredReviewThreadResolution`<sup>Required</sup> <a name="requiredReviewThreadResolution" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolution"></a>

```typescript
public readonly requiredReviewThreadResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireLastPushApproval`<sup>Required</sup> <a name="requireLastPushApproval" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireLastPushApproval"></a>

```typescript
public readonly requireLastPushApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationRulesetRulesPullRequest;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a>

---


### OrganizationRulesetRulesRequiredCodeScanningOutputReference <a name="OrganizationRulesetRulesRequiredCodeScanningOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.putRequiredCodeScanningTool">putRequiredCodeScanningTool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequiredCodeScanningTool` <a name="putRequiredCodeScanningTool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.putRequiredCodeScanningTool"></a>

```typescript
public putRequiredCodeScanningTool(value: IResolvable | OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.putRequiredCodeScanningTool.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.requiredCodeScanningTool">requiredCodeScanningTool</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.requiredCodeScanningToolInput">requiredCodeScanningToolInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requiredCodeScanningTool`<sup>Required</sup> <a name="requiredCodeScanningTool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.requiredCodeScanningTool"></a>

```typescript
public readonly requiredCodeScanningTool: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList</a>

---

##### `requiredCodeScanningToolInput`<sup>Optional</sup> <a name="requiredCodeScanningToolInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.requiredCodeScanningToolInput"></a>

```typescript
public readonly requiredCodeScanningToolInput: IResolvable | OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationRulesetRulesRequiredCodeScanning;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a>

---


### OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList <a name="OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.get"></a>

```typescript
public get(index: number): OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>[]

---


### OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference <a name="OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.alertsThresholdInput">alertsThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.securityAlertsThresholdInput">securityAlertsThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.toolInput">toolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.alertsThreshold">alertsThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.securityAlertsThreshold">securityAlertsThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.tool">tool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alertsThresholdInput`<sup>Optional</sup> <a name="alertsThresholdInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.alertsThresholdInput"></a>

```typescript
public readonly alertsThresholdInput: string;
```

- *Type:* string

---

##### `securityAlertsThresholdInput`<sup>Optional</sup> <a name="securityAlertsThresholdInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.securityAlertsThresholdInput"></a>

```typescript
public readonly securityAlertsThresholdInput: string;
```

- *Type:* string

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.toolInput"></a>

```typescript
public readonly toolInput: string;
```

- *Type:* string

---

##### `alertsThreshold`<sup>Required</sup> <a name="alertsThreshold" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.alertsThreshold"></a>

```typescript
public readonly alertsThreshold: string;
```

- *Type:* string

---

##### `securityAlertsThreshold`<sup>Required</sup> <a name="securityAlertsThreshold" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.securityAlertsThreshold"></a>

```typescript
public readonly securityAlertsThreshold: string;
```

- *Type:* string

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>

---


### OrganizationRulesetRulesRequiredStatusChecksOutputReference <a name="OrganizationRulesetRulesRequiredStatusChecksOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck">putRequiredCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resetDoNotEnforceOnCreate">resetDoNotEnforceOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resetStrictRequiredStatusChecksPolicy">resetStrictRequiredStatusChecksPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequiredCheck` <a name="putRequiredCheck" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck"></a>

```typescript
public putRequiredCheck(value: IResolvable | OrganizationRulesetRulesRequiredStatusChecksRequiredCheck[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>[]

---

##### `resetDoNotEnforceOnCreate` <a name="resetDoNotEnforceOnCreate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resetDoNotEnforceOnCreate"></a>

```typescript
public resetDoNotEnforceOnCreate(): void
```

##### `resetStrictRequiredStatusChecksPolicy` <a name="resetStrictRequiredStatusChecksPolicy" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resetStrictRequiredStatusChecksPolicy"></a>

```typescript
public resetStrictRequiredStatusChecksPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheck">requiredCheck</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList">OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.doNotEnforceOnCreateInput">doNotEnforceOnCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheckInput">requiredCheckInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicyInput">strictRequiredStatusChecksPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.doNotEnforceOnCreate">doNotEnforceOnCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicy">strictRequiredStatusChecksPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requiredCheck`<sup>Required</sup> <a name="requiredCheck" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheck"></a>

```typescript
public readonly requiredCheck: OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList">OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList</a>

---

##### `doNotEnforceOnCreateInput`<sup>Optional</sup> <a name="doNotEnforceOnCreateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.doNotEnforceOnCreateInput"></a>

```typescript
public readonly doNotEnforceOnCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredCheckInput`<sup>Optional</sup> <a name="requiredCheckInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheckInput"></a>

```typescript
public readonly requiredCheckInput: IResolvable | OrganizationRulesetRulesRequiredStatusChecksRequiredCheck[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>[]

---

##### `strictRequiredStatusChecksPolicyInput`<sup>Optional</sup> <a name="strictRequiredStatusChecksPolicyInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicyInput"></a>

```typescript
public readonly strictRequiredStatusChecksPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `doNotEnforceOnCreate`<sup>Required</sup> <a name="doNotEnforceOnCreate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.doNotEnforceOnCreate"></a>

```typescript
public readonly doNotEnforceOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `strictRequiredStatusChecksPolicy`<sup>Required</sup> <a name="strictRequiredStatusChecksPolicy" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicy"></a>

```typescript
public readonly strictRequiredStatusChecksPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationRulesetRulesRequiredStatusChecks;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a>

---


### OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList <a name="OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.get"></a>

```typescript
public get(index: number): OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrganizationRulesetRulesRequiredStatusChecksRequiredCheck[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>[]

---


### OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference <a name="OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resetIntegrationId">resetIntegrationId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntegrationId` <a name="resetIntegrationId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resetIntegrationId"></a>

```typescript
public resetIntegrationId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.contextInput">contextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationIdInput">integrationIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationId">integrationId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.contextInput"></a>

```typescript
public readonly contextInput: string;
```

- *Type:* string

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationIdInput"></a>

```typescript
public readonly integrationIdInput: number;
```

- *Type:* number

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationId"></a>

```typescript
public readonly integrationId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrganizationRulesetRulesRequiredStatusChecksRequiredCheck;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>

---


### OrganizationRulesetRulesRequiredWorkflowsOutputReference <a name="OrganizationRulesetRulesRequiredWorkflowsOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.putRequiredWorkflow">putRequiredWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resetDoNotEnforceOnCreate">resetDoNotEnforceOnCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequiredWorkflow` <a name="putRequiredWorkflow" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.putRequiredWorkflow"></a>

```typescript
public putRequiredWorkflow(value: IResolvable | OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.putRequiredWorkflow.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>[]

---

##### `resetDoNotEnforceOnCreate` <a name="resetDoNotEnforceOnCreate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resetDoNotEnforceOnCreate"></a>

```typescript
public resetDoNotEnforceOnCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.requiredWorkflow">requiredWorkflow</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.doNotEnforceOnCreateInput">doNotEnforceOnCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.requiredWorkflowInput">requiredWorkflowInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.doNotEnforceOnCreate">doNotEnforceOnCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requiredWorkflow`<sup>Required</sup> <a name="requiredWorkflow" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.requiredWorkflow"></a>

```typescript
public readonly requiredWorkflow: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList</a>

---

##### `doNotEnforceOnCreateInput`<sup>Optional</sup> <a name="doNotEnforceOnCreateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.doNotEnforceOnCreateInput"></a>

```typescript
public readonly doNotEnforceOnCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredWorkflowInput`<sup>Optional</sup> <a name="requiredWorkflowInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.requiredWorkflowInput"></a>

```typescript
public readonly requiredWorkflowInput: IResolvable | OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>[]

---

##### `doNotEnforceOnCreate`<sup>Required</sup> <a name="doNotEnforceOnCreate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.doNotEnforceOnCreate"></a>

```typescript
public readonly doNotEnforceOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationRulesetRulesRequiredWorkflows;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a>

---


### OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList <a name="OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.get"></a>

```typescript
public get(index: number): OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>[]

---


### OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference <a name="OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resetRef">resetRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRef` <a name="resetRef" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resetRef"></a>

```typescript
public resetRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.refInput">refInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.repositoryIdInput">repositoryIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.repositoryId">repositoryId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.refInput"></a>

```typescript
public readonly refInput: string;
```

- *Type:* string

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.repositoryId"></a>

```typescript
public readonly repositoryId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>

---


### OrganizationRulesetRulesTagNamePatternOutputReference <a name="OrganizationRulesetRulesTagNamePatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer"></a>

```typescript
import { organizationRuleset } from '@cdktf/provider-github'

new organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resetNegate">resetNegate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OrganizationRulesetRulesTagNamePattern;
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a>

---



