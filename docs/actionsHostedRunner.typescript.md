# `actionsHostedRunner` Submodule <a name="`actionsHostedRunner` Submodule" id="@cdktf/provider-github.actionsHostedRunner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsHostedRunner <a name="ActionsHostedRunner" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner github_actions_hosted_runner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer"></a>

```typescript
import { actionsHostedRunner } from '@cdktf/provider-github'

new actionsHostedRunner.ActionsHostedRunner(scope: Construct, id: string, config: ActionsHostedRunnerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig">ActionsHostedRunnerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig">ActionsHostedRunnerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putImage">putImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageGen">resetImageGen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageVersion">resetImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetMaximumRunners">resetMaximumRunners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetPublicIpEnabled">resetPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putImage` <a name="putImage" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putImage"></a>

```typescript
public putImage(value: ActionsHostedRunnerImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putTimeouts"></a>

```typescript
public putTimeouts(value: ActionsHostedRunnerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

---

##### `resetImageGen` <a name="resetImageGen" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageGen"></a>

```typescript
public resetImageGen(): void
```

##### `resetImageVersion` <a name="resetImageVersion" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageVersion"></a>

```typescript
public resetImageVersion(): void
```

##### `resetMaximumRunners` <a name="resetMaximumRunners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetMaximumRunners"></a>

```typescript
public resetMaximumRunners(): void
```

##### `resetPublicIpEnabled` <a name="resetPublicIpEnabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetPublicIpEnabled"></a>

```typescript
public resetPublicIpEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ActionsHostedRunner resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isConstruct"></a>

```typescript
import { actionsHostedRunner } from '@cdktf/provider-github'

actionsHostedRunner.ActionsHostedRunner.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformElement"></a>

```typescript
import { actionsHostedRunner } from '@cdktf/provider-github'

actionsHostedRunner.ActionsHostedRunner.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformResource"></a>

```typescript
import { actionsHostedRunner } from '@cdktf/provider-github'

actionsHostedRunner.ActionsHostedRunner.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport"></a>

```typescript
import { actionsHostedRunner } from '@cdktf/provider-github'

actionsHostedRunner.ActionsHostedRunner.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ActionsHostedRunner resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionsHostedRunner to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionsHostedRunner that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ActionsHostedRunner to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.image">image</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference">ActionsHostedRunnerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lastActiveOn">lastActiveOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.machineSizeDetails">machineSizeDetails</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList">ActionsHostedRunnerMachineSizeDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIps">publicIps</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList">ActionsHostedRunnerPublicIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference">ActionsHostedRunnerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGenInput">imageGenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageInput">imageInput</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersionInput">imageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunnersInput">maximumRunnersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabledInput">publicIpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupIdInput">runnerGroupIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.sizeInput">sizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGen">imageGen</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersion">imageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunners">maximumRunners</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabled">publicIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupId">runnerGroupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.size">size</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.image"></a>

```typescript
public readonly image: ActionsHostedRunnerImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference">ActionsHostedRunnerImageOutputReference</a>

---

##### `lastActiveOn`<sup>Required</sup> <a name="lastActiveOn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lastActiveOn"></a>

```typescript
public readonly lastActiveOn: string;
```

- *Type:* string

---

##### `machineSizeDetails`<sup>Required</sup> <a name="machineSizeDetails" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.machineSizeDetails"></a>

```typescript
public readonly machineSizeDetails: ActionsHostedRunnerMachineSizeDetailsList;
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList">ActionsHostedRunnerMachineSizeDetailsList</a>

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `publicIps`<sup>Required</sup> <a name="publicIps" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIps"></a>

```typescript
public readonly publicIps: ActionsHostedRunnerPublicIpsList;
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList">ActionsHostedRunnerPublicIpsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeouts"></a>

```typescript
public readonly timeouts: ActionsHostedRunnerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference">ActionsHostedRunnerTimeoutsOutputReference</a>

---

##### `imageGenInput`<sup>Optional</sup> <a name="imageGenInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGenInput"></a>

```typescript
public readonly imageGenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageInput"></a>

```typescript
public readonly imageInput: ActionsHostedRunnerImage;
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

---

##### `imageVersionInput`<sup>Optional</sup> <a name="imageVersionInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersionInput"></a>

```typescript
public readonly imageVersionInput: string;
```

- *Type:* string

---

##### `maximumRunnersInput`<sup>Optional</sup> <a name="maximumRunnersInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunnersInput"></a>

```typescript
public readonly maximumRunnersInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicIpEnabledInput`<sup>Optional</sup> <a name="publicIpEnabledInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabledInput"></a>

```typescript
public readonly publicIpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runnerGroupIdInput`<sup>Optional</sup> <a name="runnerGroupIdInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupIdInput"></a>

```typescript
public readonly runnerGroupIdInput: number;
```

- *Type:* number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.sizeInput"></a>

```typescript
public readonly sizeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ActionsHostedRunnerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

---

##### `imageGen`<sup>Required</sup> <a name="imageGen" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGen"></a>

```typescript
public readonly imageGen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

---

##### `maximumRunners`<sup>Required</sup> <a name="maximumRunners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunners"></a>

```typescript
public readonly maximumRunners: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicIpEnabled`<sup>Required</sup> <a name="publicIpEnabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabled"></a>

```typescript
public readonly publicIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runnerGroupId`<sup>Required</sup> <a name="runnerGroupId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupId"></a>

```typescript
public readonly runnerGroupId: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsHostedRunnerConfig <a name="ActionsHostedRunnerConfig" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.Initializer"></a>

```typescript
import { actionsHostedRunner } from '@cdktf/provider-github'

const actionsHostedRunnerConfig: actionsHostedRunner.ActionsHostedRunnerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.image">image</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a></code> | image block. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.name">name</a></code> | <code>string</code> | Name of the hosted runner. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.runnerGroupId">runnerGroupId</a></code> | <code>number</code> | The runner group ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.size">size</a></code> | <code>string</code> | Machine size (e.g., '4-core', '8-core'). Can be updated to scale the runner. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageGen">imageGen</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this runner should be used to generate custom images. Cannot be changed after creation. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageVersion">imageVersion</a></code> | <code>string</code> | The version of the runner image to deploy. This is relevant only for runners using custom images. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.maximumRunners">maximumRunners</a></code> | <code>number</code> | Maximum number of runners to scale up to. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.publicIpEnabled">publicIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable static public IP. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.image"></a>

```typescript
public readonly image: ActionsHostedRunnerImage;
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image ActionsHostedRunner#image}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the hosted runner.

Must be between 1 and 64 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#name ActionsHostedRunner#name}

---

##### `runnerGroupId`<sup>Required</sup> <a name="runnerGroupId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.runnerGroupId"></a>

```typescript
public readonly runnerGroupId: number;
```

- *Type:* number

The runner group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#runner_group_id ActionsHostedRunner#runner_group_id}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

Machine size (e.g., '4-core', '8-core'). Can be updated to scale the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#size ActionsHostedRunner#size}

---

##### `imageGen`<sup>Optional</sup> <a name="imageGen" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageGen"></a>

```typescript
public readonly imageGen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this runner should be used to generate custom images. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image_gen ActionsHostedRunner#image_gen}

---

##### `imageVersion`<sup>Optional</sup> <a name="imageVersion" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

The version of the runner image to deploy. This is relevant only for runners using custom images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image_version ActionsHostedRunner#image_version}

---

##### `maximumRunners`<sup>Optional</sup> <a name="maximumRunners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.maximumRunners"></a>

```typescript
public readonly maximumRunners: number;
```

- *Type:* number

Maximum number of runners to scale up to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#maximum_runners ActionsHostedRunner#maximum_runners}

---

##### `publicIpEnabled`<sup>Optional</sup> <a name="publicIpEnabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.publicIpEnabled"></a>

```typescript
public readonly publicIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable static public IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#public_ip_enabled ActionsHostedRunner#public_ip_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ActionsHostedRunnerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#timeouts ActionsHostedRunner#timeouts}

---

### ActionsHostedRunnerImage <a name="ActionsHostedRunnerImage" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.Initializer"></a>

```typescript
import { actionsHostedRunner } from '@cdktf/provider-github'

const actionsHostedRunnerImage: actionsHostedRunner.ActionsHostedRunnerImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.id">id</a></code> | <code>string</code> | The image ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.source">source</a></code> | <code>string</code> | The image source (github, partner, or custom). |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The image ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#id ActionsHostedRunner#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The image source (github, partner, or custom).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#source ActionsHostedRunner#source}

---

### ActionsHostedRunnerMachineSizeDetails <a name="ActionsHostedRunnerMachineSizeDetails" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails.Initializer"></a>

```typescript
import { actionsHostedRunner } from '@cdktf/provider-github'

const actionsHostedRunnerMachineSizeDetails: actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails = { ... }
```


### ActionsHostedRunnerPublicIps <a name="ActionsHostedRunnerPublicIps" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps.Initializer"></a>

```typescript
import { actionsHostedRunner } from '@cdktf/provider-github'

const actionsHostedRunnerPublicIps: actionsHostedRunner.ActionsHostedRunnerPublicIps = { ... }
```


### ActionsHostedRunnerTimeouts <a name="ActionsHostedRunnerTimeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts.Initializer"></a>

```typescript
import { actionsHostedRunner } from '@cdktf/provider-github'

const actionsHostedRunnerTimeouts: actionsHostedRunner.ActionsHostedRunnerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#delete ActionsHostedRunner#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#delete ActionsHostedRunner#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActionsHostedRunnerImageOutputReference <a name="ActionsHostedRunnerImageOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer"></a>

```typescript
import { actionsHostedRunner } from '@cdktf/provider-github'

new actionsHostedRunner.ActionsHostedRunnerImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSource` <a name="resetSource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sizeGb">sizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sizeGb"></a>

```typescript
public readonly sizeGb: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ActionsHostedRunnerImage;
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

---


### ActionsHostedRunnerMachineSizeDetailsList <a name="ActionsHostedRunnerMachineSizeDetailsList" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer"></a>

```typescript
import { actionsHostedRunner } from '@cdktf/provider-github'

new actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.get"></a>

```typescript
public get(index: number): ActionsHostedRunnerMachineSizeDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ActionsHostedRunnerMachineSizeDetailsOutputReference <a name="ActionsHostedRunnerMachineSizeDetailsOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer"></a>

```typescript
import { actionsHostedRunner } from '@cdktf/provider-github'

new actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.cpuCores">cpuCores</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.memoryGb">memoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.storageGb">storageGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails">ActionsHostedRunnerMachineSizeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuCores`<sup>Required</sup> <a name="cpuCores" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.cpuCores"></a>

```typescript
public readonly cpuCores: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

---

##### `storageGb`<sup>Required</sup> <a name="storageGb" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.storageGb"></a>

```typescript
public readonly storageGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ActionsHostedRunnerMachineSizeDetails;
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails">ActionsHostedRunnerMachineSizeDetails</a>

---


### ActionsHostedRunnerPublicIpsList <a name="ActionsHostedRunnerPublicIpsList" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer"></a>

```typescript
import { actionsHostedRunner } from '@cdktf/provider-github'

new actionsHostedRunner.ActionsHostedRunnerPublicIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.get"></a>

```typescript
public get(index: number): ActionsHostedRunnerPublicIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ActionsHostedRunnerPublicIpsOutputReference <a name="ActionsHostedRunnerPublicIpsOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer"></a>

```typescript
import { actionsHostedRunner } from '@cdktf/provider-github'

new actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.length">length</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps">ActionsHostedRunnerPublicIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ActionsHostedRunnerPublicIps;
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps">ActionsHostedRunnerPublicIps</a>

---


### ActionsHostedRunnerTimeoutsOutputReference <a name="ActionsHostedRunnerTimeoutsOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer"></a>

```typescript
import { actionsHostedRunner } from '@cdktf/provider-github'

new actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActionsHostedRunnerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

---



