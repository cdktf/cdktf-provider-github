# `actionsOrganizationVariable` Submodule <a name="`actionsOrganizationVariable` Submodule" id="@cdktf/provider-github.actionsOrganizationVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsOrganizationVariable <a name="ActionsOrganizationVariable" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/actions_organization_variable github_actions_organization_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.Initializer"></a>

```typescript
import { actionsOrganizationVariable } from '@cdktf/provider-github'

new actionsOrganizationVariable.ActionsOrganizationVariable(scope: Construct, id: string, config: ActionsOrganizationVariableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig">ActionsOrganizationVariableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig">ActionsOrganizationVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.resetSelectedRepositoryIds">resetSelectedRepositoryIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSelectedRepositoryIds` <a name="resetSelectedRepositoryIds" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.resetSelectedRepositoryIds"></a>

```typescript
public resetSelectedRepositoryIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ActionsOrganizationVariable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isConstruct"></a>

```typescript
import { actionsOrganizationVariable } from '@cdktf/provider-github'

actionsOrganizationVariable.ActionsOrganizationVariable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isTerraformElement"></a>

```typescript
import { actionsOrganizationVariable } from '@cdktf/provider-github'

actionsOrganizationVariable.ActionsOrganizationVariable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isTerraformResource"></a>

```typescript
import { actionsOrganizationVariable } from '@cdktf/provider-github'

actionsOrganizationVariable.ActionsOrganizationVariable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.generateConfigForImport"></a>

```typescript
import { actionsOrganizationVariable } from '@cdktf/provider-github'

actionsOrganizationVariable.ActionsOrganizationVariable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ActionsOrganizationVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionsOrganizationVariable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionsOrganizationVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/actions_organization_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ActionsOrganizationVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.selectedRepositoryIdsInput">selectedRepositoryIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.variableNameInput">variableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.variableName">variableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `selectedRepositoryIdsInput`<sup>Optional</sup> <a name="selectedRepositoryIdsInput" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.selectedRepositoryIdsInput"></a>

```typescript
public readonly selectedRepositoryIdsInput: number[];
```

- *Type:* number[]

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `variableNameInput`<sup>Optional</sup> <a name="variableNameInput" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.variableNameInput"></a>

```typescript
public readonly variableNameInput: string;
```

- *Type:* string

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `selectedRepositoryIds`<sup>Required</sup> <a name="selectedRepositoryIds" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.selectedRepositoryIds"></a>

```typescript
public readonly selectedRepositoryIds: number[];
```

- *Type:* number[]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `variableName`<sup>Required</sup> <a name="variableName" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.variableName"></a>

```typescript
public readonly variableName: string;
```

- *Type:* string

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsOrganizationVariableConfig <a name="ActionsOrganizationVariableConfig" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.Initializer"></a>

```typescript
import { actionsOrganizationVariable } from '@cdktf/provider-github'

const actionsOrganizationVariableConfig: actionsOrganizationVariable.ActionsOrganizationVariableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.value">value</a></code> | <code>string</code> | Value of the variable. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.variableName">variableName</a></code> | <code>string</code> | Name of the variable. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.visibility">visibility</a></code> | <code>string</code> | Configures the access that repositories have to the organization variable. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/actions_organization_variable#id ActionsOrganizationVariable#id}. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>number[]</code> | An array of repository ids that can access the organization variable. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/actions_organization_variable#value ActionsOrganizationVariable#value}

---

##### `variableName`<sup>Required</sup> <a name="variableName" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.variableName"></a>

```typescript
public readonly variableName: string;
```

- *Type:* string

Name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/actions_organization_variable#variable_name ActionsOrganizationVariable#variable_name}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

Configures the access that repositories have to the organization variable.

Must be one of 'all', 'private', or 'selected'. 'selected_repository_ids' is required if set to 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/actions_organization_variable#visibility ActionsOrganizationVariable#visibility}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/actions_organization_variable#id ActionsOrganizationVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `selectedRepositoryIds`<sup>Optional</sup> <a name="selectedRepositoryIds" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.selectedRepositoryIds"></a>

```typescript
public readonly selectedRepositoryIds: number[];
```

- *Type:* number[]

An array of repository ids that can access the organization variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/actions_organization_variable#selected_repository_ids ActionsOrganizationVariable#selected_repository_ids}

---



