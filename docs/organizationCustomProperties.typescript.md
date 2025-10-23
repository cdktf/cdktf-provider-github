# `organizationCustomProperties` Submodule <a name="`organizationCustomProperties` Submodule" id="@cdktf/provider-github.organizationCustomProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationCustomProperties <a name="OrganizationCustomProperties" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_custom_properties github_organization_custom_properties}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer"></a>

```typescript
import { organizationCustomProperties } from '@cdktf/provider-github'

new organizationCustomProperties.OrganizationCustomProperties(scope: Construct, id: string, config: OrganizationCustomPropertiesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig">OrganizationCustomPropertiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig">OrganizationCustomPropertiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetAllowedValues"></a>

```typescript
public resetAllowedValues(): void
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetValueType` <a name="resetValueType" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetValueType"></a>

```typescript
public resetValueType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrganizationCustomProperties resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isConstruct"></a>

```typescript
import { organizationCustomProperties } from '@cdktf/provider-github'

organizationCustomProperties.OrganizationCustomProperties.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformElement"></a>

```typescript
import { organizationCustomProperties } from '@cdktf/provider-github'

organizationCustomProperties.OrganizationCustomProperties.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformResource"></a>

```typescript
import { organizationCustomProperties } from '@cdktf/provider-github'

organizationCustomProperties.OrganizationCustomProperties.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport"></a>

```typescript
import { organizationCustomProperties } from '@cdktf/provider-github'

organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OrganizationCustomProperties resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrganizationCustomProperties to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrganizationCustomProperties that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_custom_properties#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationCustomProperties to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.allowedValuesInput">allowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.propertyNameInput">propertyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.propertyName">propertyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.allowedValuesInput"></a>

```typescript
public readonly allowedValuesInput: string[];
```

- *Type:* string[]

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `propertyNameInput`<sup>Optional</sup> <a name="propertyNameInput" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.propertyNameInput"></a>

```typescript
public readonly propertyNameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.propertyName"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationCustomPropertiesConfig <a name="OrganizationCustomPropertiesConfig" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.Initializer"></a>

```typescript
import { organizationCustomProperties } from '@cdktf/provider-github'

const organizationCustomPropertiesConfig: organizationCustomProperties.OrganizationCustomPropertiesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.propertyName">propertyName</a></code> | <code>string</code> | The name of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | The allowed values of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.defaultValue">defaultValue</a></code> | <code>string</code> | The default value of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.description">description</a></code> | <code>string</code> | The description of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_custom_properties#id OrganizationCustomProperties#id}. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the custom property is required. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.valueType">valueType</a></code> | <code>string</code> | The type of the custom property. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.propertyName"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* string

The name of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_custom_properties#property_name OrganizationCustomProperties#property_name}

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

The allowed values of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_custom_properties#allowed_values OrganizationCustomProperties#allowed_values}

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

The default value of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_custom_properties#default_value OrganizationCustomProperties#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_custom_properties#description OrganizationCustomProperties#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_custom_properties#id OrganizationCustomProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the custom property is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_custom_properties#required OrganizationCustomProperties#required}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

The type of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/organization_custom_properties#value_type OrganizationCustomProperties#value_type}

---



