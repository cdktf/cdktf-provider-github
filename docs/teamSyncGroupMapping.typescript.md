# `teamSyncGroupMapping` Submodule <a name="`teamSyncGroupMapping` Submodule" id="@cdktf/provider-github.teamSyncGroupMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamSyncGroupMapping <a name="TeamSyncGroupMapping" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/team_sync_group_mapping github_team_sync_group_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer"></a>

```typescript
import { teamSyncGroupMapping } from '@cdktf/provider-github'

new teamSyncGroupMapping.TeamSyncGroupMapping(scope: Construct, id: string, config: TeamSyncGroupMappingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig">TeamSyncGroupMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig">TeamSyncGroupMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.putGroup">putGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGroup` <a name="putGroup" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.putGroup"></a>

```typescript
public putGroup(value: IResolvable | TeamSyncGroupMappingGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.putGroup.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>[]

---

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TeamSyncGroupMapping resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isConstruct"></a>

```typescript
import { teamSyncGroupMapping } from '@cdktf/provider-github'

teamSyncGroupMapping.TeamSyncGroupMapping.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformElement"></a>

```typescript
import { teamSyncGroupMapping } from '@cdktf/provider-github'

teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformResource"></a>

```typescript
import { teamSyncGroupMapping } from '@cdktf/provider-github'

teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport"></a>

```typescript
import { teamSyncGroupMapping } from '@cdktf/provider-github'

teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TeamSyncGroupMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TeamSyncGroupMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TeamSyncGroupMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/team_sync_group_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TeamSyncGroupMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.group">group</a></code> | <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList">TeamSyncGroupMappingGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.groupInput">groupInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.teamSlugInput">teamSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.teamSlug">teamSlug</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.group"></a>

```typescript
public readonly group: TeamSyncGroupMappingGroupList;
```

- *Type:* <a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList">TeamSyncGroupMappingGroupList</a>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.groupInput"></a>

```typescript
public readonly groupInput: IResolvable | TeamSyncGroupMappingGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `teamSlugInput`<sup>Optional</sup> <a name="teamSlugInput" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.teamSlugInput"></a>

```typescript
public readonly teamSlugInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `teamSlug`<sup>Required</sup> <a name="teamSlug" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.teamSlug"></a>

```typescript
public readonly teamSlug: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamSyncGroupMappingConfig <a name="TeamSyncGroupMappingConfig" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.Initializer"></a>

```typescript
import { teamSyncGroupMapping } from '@cdktf/provider-github'

const teamSyncGroupMappingConfig: teamSyncGroupMapping.TeamSyncGroupMappingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.teamSlug">teamSlug</a></code> | <code>string</code> | Slug of the team. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.group">group</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>[]</code> | group block. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/team_sync_group_mapping#id TeamSyncGroupMapping#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `teamSlug`<sup>Required</sup> <a name="teamSlug" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.teamSlug"></a>

```typescript
public readonly teamSlug: string;
```

- *Type:* string

Slug of the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/team_sync_group_mapping#team_slug TeamSyncGroupMapping#team_slug}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.group"></a>

```typescript
public readonly group: IResolvable | TeamSyncGroupMappingGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>[]

group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/team_sync_group_mapping#group TeamSyncGroupMapping#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/team_sync_group_mapping#id TeamSyncGroupMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TeamSyncGroupMappingGroup <a name="TeamSyncGroupMappingGroup" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.Initializer"></a>

```typescript
import { teamSyncGroupMapping } from '@cdktf/provider-github'

const teamSyncGroupMappingGroup: teamSyncGroupMapping.TeamSyncGroupMappingGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupDescription">groupDescription</a></code> | <code>string</code> | The description of the IdP group. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupId">groupId</a></code> | <code>string</code> | The ID of the IdP group. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupName">groupName</a></code> | <code>string</code> | The name of the IdP group. |

---

##### `groupDescription`<sup>Required</sup> <a name="groupDescription" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupDescription"></a>

```typescript
public readonly groupDescription: string;
```

- *Type:* string

The description of the IdP group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/team_sync_group_mapping#group_description TeamSyncGroupMapping#group_description}

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The ID of the IdP group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/team_sync_group_mapping#group_id TeamSyncGroupMapping#group_id}

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The name of the IdP group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/team_sync_group_mapping#group_name TeamSyncGroupMapping#group_name}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamSyncGroupMappingGroupList <a name="TeamSyncGroupMappingGroupList" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer"></a>

```typescript
import { teamSyncGroupMapping } from '@cdktf/provider-github'

new teamSyncGroupMapping.TeamSyncGroupMappingGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.get"></a>

```typescript
public get(index: number): TeamSyncGroupMappingGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TeamSyncGroupMappingGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>[]

---


### TeamSyncGroupMappingGroupOutputReference <a name="TeamSyncGroupMappingGroupOutputReference" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer"></a>

```typescript
import { teamSyncGroupMapping } from '@cdktf/provider-github'

new teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupDescriptionInput">groupDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupDescription">groupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupDescriptionInput`<sup>Optional</sup> <a name="groupDescriptionInput" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupDescriptionInput"></a>

```typescript
public readonly groupDescriptionInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `groupDescription`<sup>Required</sup> <a name="groupDescription" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupDescription"></a>

```typescript
public readonly groupDescription: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TeamSyncGroupMappingGroup;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>

---



