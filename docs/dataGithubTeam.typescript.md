# `data_github_team`

Refer to the Terraform Registory for docs: [`data_github_team`](https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/team).

# `dataGithubTeam` Submodule <a name="`dataGithubTeam` Submodule" id="@cdktf/provider-github.dataGithubTeam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubTeam <a name="DataGithubTeam" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/team github_team}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer"></a>

```typescript
import { dataGithubTeam } from '@cdktf/provider-github'

new dataGithubTeam.DataGithubTeam(scope: Construct, id: string, config: DataGithubTeamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig">DataGithubTeamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig">DataGithubTeamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetMembershipType">resetMembershipType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetResultsPerPage">resetResultsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetSummaryOnly">resetSummaryOnly</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMembershipType` <a name="resetMembershipType" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetMembershipType"></a>

```typescript
public resetMembershipType(): void
```

##### `resetResultsPerPage` <a name="resetResultsPerPage" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetResultsPerPage"></a>

```typescript
public resetResultsPerPage(): void
```

##### `resetSummaryOnly` <a name="resetSummaryOnly" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetSummaryOnly"></a>

```typescript
public resetSummaryOnly(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isConstruct"></a>

```typescript
import { dataGithubTeam } from '@cdktf/provider-github'

dataGithubTeam.DataGithubTeam.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformElement"></a>

```typescript
import { dataGithubTeam } from '@cdktf/provider-github'

dataGithubTeam.DataGithubTeam.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformDataSource"></a>

```typescript
import { dataGithubTeam } from '@cdktf/provider-github'

dataGithubTeam.DataGithubTeam.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.nodeId">nodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.privacy">privacy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.repositories">repositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.membershipTypeInput">membershipTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.resultsPerPageInput">resultsPerPageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.slugInput">slugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.summaryOnlyInput">summaryOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.membershipType">membershipType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.resultsPerPage">resultsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.slug">slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.summaryOnly">summaryOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.privacy"></a>

```typescript
public readonly privacy: string;
```

- *Type:* string

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.repositories"></a>

```typescript
public readonly repositories: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membershipTypeInput`<sup>Optional</sup> <a name="membershipTypeInput" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.membershipTypeInput"></a>

```typescript
public readonly membershipTypeInput: string;
```

- *Type:* string

---

##### `resultsPerPageInput`<sup>Optional</sup> <a name="resultsPerPageInput" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.resultsPerPageInput"></a>

```typescript
public readonly resultsPerPageInput: number;
```

- *Type:* number

---

##### `slugInput`<sup>Optional</sup> <a name="slugInput" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.slugInput"></a>

```typescript
public readonly slugInput: string;
```

- *Type:* string

---

##### `summaryOnlyInput`<sup>Optional</sup> <a name="summaryOnlyInput" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.summaryOnlyInput"></a>

```typescript
public readonly summaryOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `membershipType`<sup>Required</sup> <a name="membershipType" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.membershipType"></a>

```typescript
public readonly membershipType: string;
```

- *Type:* string

---

##### `resultsPerPage`<sup>Required</sup> <a name="resultsPerPage" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.resultsPerPage"></a>

```typescript
public readonly resultsPerPage: number;
```

- *Type:* number

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

---

##### `summaryOnly`<sup>Required</sup> <a name="summaryOnly" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.summaryOnly"></a>

```typescript
public readonly summaryOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubTeamConfig <a name="DataGithubTeamConfig" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.Initializer"></a>

```typescript
import { dataGithubTeam } from '@cdktf/provider-github'

const dataGithubTeamConfig: dataGithubTeam.DataGithubTeamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.slug">slug</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/team#slug DataGithubTeam#slug}. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/team#id DataGithubTeam#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.membershipType">membershipType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/team#membership_type DataGithubTeam#membership_type}. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.resultsPerPage">resultsPerPage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/team#results_per_page DataGithubTeam#results_per_page}. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.summaryOnly">summaryOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/team#summary_only DataGithubTeam#summary_only}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/team#slug DataGithubTeam#slug}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/team#id DataGithubTeam#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `membershipType`<sup>Optional</sup> <a name="membershipType" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.membershipType"></a>

```typescript
public readonly membershipType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/team#membership_type DataGithubTeam#membership_type}.

---

##### `resultsPerPage`<sup>Optional</sup> <a name="resultsPerPage" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.resultsPerPage"></a>

```typescript
public readonly resultsPerPage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/team#results_per_page DataGithubTeam#results_per_page}.

---

##### `summaryOnly`<sup>Optional</sup> <a name="summaryOnly" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.summaryOnly"></a>

```typescript
public readonly summaryOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/data-sources/team#summary_only DataGithubTeam#summary_only}.

---



