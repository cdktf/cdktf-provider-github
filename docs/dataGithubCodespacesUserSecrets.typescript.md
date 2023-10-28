# `data_github_codespaces_user_secrets`

Refer to the Terraform Registory for docs: [`data_github_codespaces_user_secrets`](https://registry.terraform.io/providers/integrations/github/5.41.0/docs/data-sources/codespaces_user_secrets).

# `dataGithubCodespacesUserSecrets` Submodule <a name="`dataGithubCodespacesUserSecrets` Submodule" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubCodespacesUserSecrets <a name="DataGithubCodespacesUserSecrets" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/data-sources/codespaces_user_secrets github_codespaces_user_secrets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.Initializer"></a>

```typescript
import { dataGithubCodespacesUserSecrets } from '@cdktf/provider-github'

new dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets(scope: Construct, id: string, config?: DataGithubCodespacesUserSecretsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig">DataGithubCodespacesUserSecretsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig">DataGithubCodespacesUserSecretsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubCodespacesUserSecrets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isConstruct"></a>

```typescript
import { dataGithubCodespacesUserSecrets } from '@cdktf/provider-github'

dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isTerraformElement"></a>

```typescript
import { dataGithubCodespacesUserSecrets } from '@cdktf/provider-github'

dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isTerraformDataSource"></a>

```typescript
import { dataGithubCodespacesUserSecrets } from '@cdktf/provider-github'

dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.generateConfigForImport"></a>

```typescript
import { dataGithubCodespacesUserSecrets } from '@cdktf/provider-github'

dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGithubCodespacesUserSecrets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubCodespacesUserSecrets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubCodespacesUserSecrets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/data-sources/codespaces_user_secrets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubCodespacesUserSecrets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList">DataGithubCodespacesUserSecretsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.secrets"></a>

```typescript
public readonly secrets: DataGithubCodespacesUserSecretsSecretsList;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList">DataGithubCodespacesUserSecretsSecretsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecrets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubCodespacesUserSecretsConfig <a name="DataGithubCodespacesUserSecretsConfig" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.Initializer"></a>

```typescript
import { dataGithubCodespacesUserSecrets } from '@cdktf/provider-github'

const dataGithubCodespacesUserSecretsConfig: dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/data-sources/codespaces_user_secrets#id DataGithubCodespacesUserSecrets#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/data-sources/codespaces_user_secrets#id DataGithubCodespacesUserSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubCodespacesUserSecretsSecrets <a name="DataGithubCodespacesUserSecretsSecrets" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecrets.Initializer"></a>

```typescript
import { dataGithubCodespacesUserSecrets } from '@cdktf/provider-github'

const dataGithubCodespacesUserSecretsSecrets: dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecrets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubCodespacesUserSecretsSecretsList <a name="DataGithubCodespacesUserSecretsSecretsList" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.Initializer"></a>

```typescript
import { dataGithubCodespacesUserSecrets } from '@cdktf/provider-github'

new dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.get"></a>

```typescript
public get(index: number): DataGithubCodespacesUserSecretsSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGithubCodespacesUserSecretsSecretsOutputReference <a name="DataGithubCodespacesUserSecretsSecretsOutputReference" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer"></a>

```typescript
import { dataGithubCodespacesUserSecrets } from '@cdktf/provider-github'

new dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecrets">DataGithubCodespacesUserSecretsSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecretsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGithubCodespacesUserSecretsSecrets;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubCodespacesUserSecrets.DataGithubCodespacesUserSecretsSecrets">DataGithubCodespacesUserSecretsSecrets</a>

---



