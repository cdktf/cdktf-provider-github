# `github_branch_protection_v3`

Refer to the Terraform Registory for docs: [`github_branch_protection_v3`](https://www.terraform.io/docs/providers/github/r/branch_protection_v3).

# `branchProtectionV3` Submodule <a name="`branchProtectionV3` Submodule" id="@cdktf/provider-github.branchProtectionV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BranchProtectionV3 <a name="BranchProtectionV3" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3 github_branch_protection_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer"></a>

```typescript
import { branchProtectionV3 } from '@cdktf/provider-github'

new branchProtectionV3.BranchProtectionV3(scope: Construct, id: string, config: BranchProtectionV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config">BranchProtectionV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config">BranchProtectionV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews">putRequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks">putRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRestrictions">putRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetEnforceAdmins">resetEnforceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireConversationResolution">resetRequireConversationResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredPullRequestReviews">resetRequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredStatusChecks">resetRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireSignedCommits">resetRequireSignedCommits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRestrictions">resetRestrictions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRequiredPullRequestReviews` <a name="putRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews"></a>

```typescript
public putRequiredPullRequestReviews(value: BranchProtectionV3RequiredPullRequestReviews): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

---

##### `putRequiredStatusChecks` <a name="putRequiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks"></a>

```typescript
public putRequiredStatusChecks(value: BranchProtectionV3RequiredStatusChecks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

---

##### `putRestrictions` <a name="putRestrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRestrictions"></a>

```typescript
public putRestrictions(value: BranchProtectionV3Restrictions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

---

##### `resetEnforceAdmins` <a name="resetEnforceAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetEnforceAdmins"></a>

```typescript
public resetEnforceAdmins(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRequireConversationResolution` <a name="resetRequireConversationResolution" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireConversationResolution"></a>

```typescript
public resetRequireConversationResolution(): void
```

##### `resetRequiredPullRequestReviews` <a name="resetRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredPullRequestReviews"></a>

```typescript
public resetRequiredPullRequestReviews(): void
```

##### `resetRequiredStatusChecks` <a name="resetRequiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredStatusChecks"></a>

```typescript
public resetRequiredStatusChecks(): void
```

##### `resetRequireSignedCommits` <a name="resetRequireSignedCommits" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireSignedCommits"></a>

```typescript
public resetRequireSignedCommits(): void
```

##### `resetRestrictions` <a name="resetRestrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRestrictions"></a>

```typescript
public resetRestrictions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isConstruct"></a>

```typescript
import { branchProtectionV3 } from '@cdktf/provider-github'

branchProtectionV3.BranchProtectionV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformElement"></a>

```typescript
import { branchProtectionV3 } from '@cdktf/provider-github'

branchProtectionV3.BranchProtectionV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformResource"></a>

```typescript
import { branchProtectionV3 } from '@cdktf/provider-github'

branchProtectionV3.BranchProtectionV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviews">requiredPullRequestReviews</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference">BranchProtectionV3RequiredPullRequestReviewsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecks">requiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference">BranchProtectionV3RequiredStatusChecksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference">BranchProtectionV3RestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdminsInput">enforceAdminsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolutionInput">requireConversationResolutionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviewsInput">requiredPullRequestReviewsInput</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecksInput">requiredStatusChecksInput</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommitsInput">requireSignedCommitsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictionsInput">restrictionsInput</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdmins">enforceAdmins</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolution">requireConversationResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommits">requireSignedCommits</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `requiredPullRequestReviews`<sup>Required</sup> <a name="requiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviews"></a>

```typescript
public readonly requiredPullRequestReviews: BranchProtectionV3RequiredPullRequestReviewsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference">BranchProtectionV3RequiredPullRequestReviewsOutputReference</a>

---

##### `requiredStatusChecks`<sup>Required</sup> <a name="requiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecks"></a>

```typescript
public readonly requiredStatusChecks: BranchProtectionV3RequiredStatusChecksOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference">BranchProtectionV3RequiredStatusChecksOutputReference</a>

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictions"></a>

```typescript
public readonly restrictions: BranchProtectionV3RestrictionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference">BranchProtectionV3RestrictionsOutputReference</a>

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `enforceAdminsInput`<sup>Optional</sup> <a name="enforceAdminsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdminsInput"></a>

```typescript
public readonly enforceAdminsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `requireConversationResolutionInput`<sup>Optional</sup> <a name="requireConversationResolutionInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolutionInput"></a>

```typescript
public readonly requireConversationResolutionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredPullRequestReviewsInput`<sup>Optional</sup> <a name="requiredPullRequestReviewsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviewsInput"></a>

```typescript
public readonly requiredPullRequestReviewsInput: BranchProtectionV3RequiredPullRequestReviews;
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

---

##### `requiredStatusChecksInput`<sup>Optional</sup> <a name="requiredStatusChecksInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecksInput"></a>

```typescript
public readonly requiredStatusChecksInput: BranchProtectionV3RequiredStatusChecks;
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

---

##### `requireSignedCommitsInput`<sup>Optional</sup> <a name="requireSignedCommitsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommitsInput"></a>

```typescript
public readonly requireSignedCommitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictionsInput`<sup>Optional</sup> <a name="restrictionsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictionsInput"></a>

```typescript
public readonly restrictionsInput: BranchProtectionV3Restrictions;
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `enforceAdmins`<sup>Required</sup> <a name="enforceAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdmins"></a>

```typescript
public readonly enforceAdmins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `requireConversationResolution`<sup>Required</sup> <a name="requireConversationResolution" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolution"></a>

```typescript
public readonly requireConversationResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireSignedCommits`<sup>Required</sup> <a name="requireSignedCommits" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommits"></a>

```typescript
public readonly requireSignedCommits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BranchProtectionV3Config <a name="BranchProtectionV3Config" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.Initializer"></a>

```typescript
import { branchProtectionV3 } from '@cdktf/provider-github'

const branchProtectionV3Config: branchProtectionV3.BranchProtectionV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.branch">branch</a></code> | <code>string</code> | The Git branch to protect. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.repository">repository</a></code> | <code>string</code> | The GitHub repository name. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.enforceAdmins">enforceAdmins</a></code> | <code>boolean \| cdktf.IResolvable</code> | Setting this to 'true' enforces status checks for repository administrators. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#id BranchProtectionV3#id}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireConversationResolution">requireConversationResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredPullRequestReviews">requiredPullRequestReviews</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a></code> | required_pull_request_reviews block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredStatusChecks">requiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a></code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireSignedCommits">requireSignedCommits</a></code> | <code>boolean \| cdktf.IResolvable</code> | Setting this to 'true' requires all commits to be signed with GPG. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a></code> | restrictions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

The Git branch to protect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#branch BranchProtectionV3#branch}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The GitHub repository name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#repository BranchProtectionV3#repository}

---

##### `enforceAdmins`<sup>Optional</sup> <a name="enforceAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.enforceAdmins"></a>

```typescript
public readonly enforceAdmins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Setting this to 'true' enforces status checks for repository administrators.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#enforce_admins BranchProtectionV3#enforce_admins}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#id BranchProtectionV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requireConversationResolution`<sup>Optional</sup> <a name="requireConversationResolution" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireConversationResolution"></a>

```typescript
public readonly requireConversationResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#require_conversation_resolution BranchProtectionV3#require_conversation_resolution}

---

##### `requiredPullRequestReviews`<sup>Optional</sup> <a name="requiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredPullRequestReviews"></a>

```typescript
public readonly requiredPullRequestReviews: BranchProtectionV3RequiredPullRequestReviews;
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

required_pull_request_reviews block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#required_pull_request_reviews BranchProtectionV3#required_pull_request_reviews}

---

##### `requiredStatusChecks`<sup>Optional</sup> <a name="requiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredStatusChecks"></a>

```typescript
public readonly requiredStatusChecks: BranchProtectionV3RequiredStatusChecks;
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

required_status_checks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#required_status_checks BranchProtectionV3#required_status_checks}

---

##### `requireSignedCommits`<sup>Optional</sup> <a name="requireSignedCommits" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireSignedCommits"></a>

```typescript
public readonly requireSignedCommits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Setting this to 'true' requires all commits to be signed with GPG.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#require_signed_commits BranchProtectionV3#require_signed_commits}

---

##### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.restrictions"></a>

```typescript
public readonly restrictions: BranchProtectionV3Restrictions;
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#restrictions BranchProtectionV3#restrictions}

---

### BranchProtectionV3RequiredPullRequestReviews <a name="BranchProtectionV3RequiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.Initializer"></a>

```typescript
import { branchProtectionV3 } from '@cdktf/provider-github'

const branchProtectionV3RequiredPullRequestReviews: branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.bypassPullRequestAllowances">bypassPullRequestAllowances</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a></code> | bypass_pull_request_allowances block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalTeams">dismissalTeams</a></code> | <code>string[]</code> | The list of team slugs with dismissal access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalUsers">dismissalUsers</a></code> | <code>string[]</code> | The list of user logins with dismissal access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissStaleReviews">dismissStaleReviews</a></code> | <code>boolean \| cdktf.IResolvable</code> | Dismiss approved reviews automatically when a new commit is pushed. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.includeAdmins">includeAdmins</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requireCodeOwnerReviews">requireCodeOwnerReviews</a></code> | <code>boolean \| cdktf.IResolvable</code> | Require an approved review in pull requests including files with a designated code owner. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requiredApprovingReviewCount">requiredApprovingReviewCount</a></code> | <code>number</code> | Require 'x' number of approvals to satisfy branch protection requirements. |

---

##### `bypassPullRequestAllowances`<sup>Optional</sup> <a name="bypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.bypassPullRequestAllowances"></a>

```typescript
public readonly bypassPullRequestAllowances: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances;
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

bypass_pull_request_allowances block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#bypass_pull_request_allowances BranchProtectionV3#bypass_pull_request_allowances}

---

##### `dismissalTeams`<sup>Optional</sup> <a name="dismissalTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalTeams"></a>

```typescript
public readonly dismissalTeams: string[];
```

- *Type:* string[]

The list of team slugs with dismissal access.

Always use slug of the team, not its name. Each team already has to have access to the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#dismissal_teams BranchProtectionV3#dismissal_teams}

---

##### `dismissalUsers`<sup>Optional</sup> <a name="dismissalUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalUsers"></a>

```typescript
public readonly dismissalUsers: string[];
```

- *Type:* string[]

The list of user logins with dismissal access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#dismissal_users BranchProtectionV3#dismissal_users}

---

##### `dismissStaleReviews`<sup>Optional</sup> <a name="dismissStaleReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissStaleReviews"></a>

```typescript
public readonly dismissStaleReviews: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Dismiss approved reviews automatically when a new commit is pushed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#dismiss_stale_reviews BranchProtectionV3#dismiss_stale_reviews}

---

##### `includeAdmins`<sup>Optional</sup> <a name="includeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.includeAdmins"></a>

```typescript
public readonly includeAdmins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}.

---

##### `requireCodeOwnerReviews`<sup>Optional</sup> <a name="requireCodeOwnerReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requireCodeOwnerReviews"></a>

```typescript
public readonly requireCodeOwnerReviews: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Require an approved review in pull requests including files with a designated code owner.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#require_code_owner_reviews BranchProtectionV3#require_code_owner_reviews}

---

##### `requiredApprovingReviewCount`<sup>Optional</sup> <a name="requiredApprovingReviewCount" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requiredApprovingReviewCount"></a>

```typescript
public readonly requiredApprovingReviewCount: number;
```

- *Type:* number

Require 'x' number of approvals to satisfy branch protection requirements.

If this is specified it must be a number between 0-6.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#required_approving_review_count BranchProtectionV3#required_approving_review_count}

---

### BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances <a name="BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.Initializer"></a>

```typescript
import { branchProtectionV3 } from '@cdktf/provider-github'

const branchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances: branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.apps">apps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#apps BranchProtectionV3#apps}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.teams">teams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#teams BranchProtectionV3#teams}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.users">users</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#users BranchProtectionV3#users}. |

---

##### `apps`<sup>Optional</sup> <a name="apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.apps"></a>

```typescript
public readonly apps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#apps BranchProtectionV3#apps}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#teams BranchProtectionV3#teams}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#users BranchProtectionV3#users}.

---

### BranchProtectionV3RequiredStatusChecks <a name="BranchProtectionV3RequiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.Initializer"></a>

```typescript
import { branchProtectionV3 } from '@cdktf/provider-github'

const branchProtectionV3RequiredStatusChecks: branchProtectionV3.BranchProtectionV3RequiredStatusChecks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.checks">checks</a></code> | <code>string[]</code> | The list of status checks to require in order to merge into this branch. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.contexts">contexts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#contexts BranchProtectionV3#contexts}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.includeAdmins">includeAdmins</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.strict">strict</a></code> | <code>boolean \| cdktf.IResolvable</code> | Require branches to be up to date before merging. |

---

##### `checks`<sup>Optional</sup> <a name="checks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.checks"></a>

```typescript
public readonly checks: string[];
```

- *Type:* string[]

The list of status checks to require in order to merge into this branch.

No status checks are required by default. Checks should be strings containing the 'context' and 'app_id' like so 'context:app_id'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#checks BranchProtectionV3#checks}

---

##### `contexts`<sup>Optional</sup> <a name="contexts" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.contexts"></a>

```typescript
public readonly contexts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#contexts BranchProtectionV3#contexts}.

---

##### `includeAdmins`<sup>Optional</sup> <a name="includeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.includeAdmins"></a>

```typescript
public readonly includeAdmins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}.

---

##### `strict`<sup>Optional</sup> <a name="strict" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.strict"></a>

```typescript
public readonly strict: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Require branches to be up to date before merging.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#strict BranchProtectionV3#strict}

---

### BranchProtectionV3Restrictions <a name="BranchProtectionV3Restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.Initializer"></a>

```typescript
import { branchProtectionV3 } from '@cdktf/provider-github'

const branchProtectionV3Restrictions: branchProtectionV3.BranchProtectionV3Restrictions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.apps">apps</a></code> | <code>string[]</code> | The list of app slugs with push access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.teams">teams</a></code> | <code>string[]</code> | The list of team slugs with push access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.users">users</a></code> | <code>string[]</code> | The list of user logins with push access. |

---

##### `apps`<sup>Optional</sup> <a name="apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.apps"></a>

```typescript
public readonly apps: string[];
```

- *Type:* string[]

The list of app slugs with push access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#apps BranchProtectionV3#apps}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* string[]

The list of team slugs with push access.

Always use slug of the team, not its name. Each team already has to have access to the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#teams BranchProtectionV3#teams}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

The list of user logins with push access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#users BranchProtectionV3#users}

---

## Classes <a name="Classes" id="Classes"></a>

### BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference <a name="BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer"></a>

```typescript
import { branchProtectionV3 } from '@cdktf/provider-github'

new branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetApps">resetApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetTeams">resetTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApps` <a name="resetApps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetApps"></a>

```typescript
public resetApps(): void
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetTeams"></a>

```typescript
public resetTeams(): void
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetUsers"></a>

```typescript
public resetUsers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.appsInput">appsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teamsInput">teamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.usersInput">usersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.apps">apps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teams">teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appsInput`<sup>Optional</sup> <a name="appsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.appsInput"></a>

```typescript
public readonly appsInput: string[];
```

- *Type:* string[]

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teamsInput"></a>

```typescript
public readonly teamsInput: string[];
```

- *Type:* string[]

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.usersInput"></a>

```typescript
public readonly usersInput: string[];
```

- *Type:* string[]

---

##### `apps`<sup>Required</sup> <a name="apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.apps"></a>

```typescript
public readonly apps: string[];
```

- *Type:* string[]

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* string[]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances;
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

---


### BranchProtectionV3RequiredPullRequestReviewsOutputReference <a name="BranchProtectionV3RequiredPullRequestReviewsOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer"></a>

```typescript
import { branchProtectionV3 } from '@cdktf/provider-github'

new branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.putBypassPullRequestAllowances">putBypassPullRequestAllowances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetBypassPullRequestAllowances">resetBypassPullRequestAllowances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalTeams">resetDismissalTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalUsers">resetDismissalUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissStaleReviews">resetDismissStaleReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetIncludeAdmins">resetIncludeAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews">resetRequireCodeOwnerReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount">resetRequiredApprovingReviewCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBypassPullRequestAllowances` <a name="putBypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.putBypassPullRequestAllowances"></a>

```typescript
public putBypassPullRequestAllowances(value: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.putBypassPullRequestAllowances.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

---

##### `resetBypassPullRequestAllowances` <a name="resetBypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetBypassPullRequestAllowances"></a>

```typescript
public resetBypassPullRequestAllowances(): void
```

##### `resetDismissalTeams` <a name="resetDismissalTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalTeams"></a>

```typescript
public resetDismissalTeams(): void
```

##### `resetDismissalUsers` <a name="resetDismissalUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalUsers"></a>

```typescript
public resetDismissalUsers(): void
```

##### `resetDismissStaleReviews` <a name="resetDismissStaleReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissStaleReviews"></a>

```typescript
public resetDismissStaleReviews(): void
```

##### `resetIncludeAdmins` <a name="resetIncludeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetIncludeAdmins"></a>

```typescript
public resetIncludeAdmins(): void
```

##### `resetRequireCodeOwnerReviews` <a name="resetRequireCodeOwnerReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews"></a>

```typescript
public resetRequireCodeOwnerReviews(): void
```

##### `resetRequiredApprovingReviewCount` <a name="resetRequiredApprovingReviewCount" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount"></a>

```typescript
public resetRequiredApprovingReviewCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowances">bypassPullRequestAllowances</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowancesInput">bypassPullRequestAllowancesInput</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeamsInput">dismissalTeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsersInput">dismissalUsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput">dismissStaleReviewsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdminsInput">includeAdminsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput">requireCodeOwnerReviewsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput">requiredApprovingReviewCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeams">dismissalTeams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsers">dismissalUsers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviews">dismissStaleReviews</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdmins">includeAdmins</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews">requireCodeOwnerReviews</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount">requiredApprovingReviewCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bypassPullRequestAllowances`<sup>Required</sup> <a name="bypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowances"></a>

```typescript
public readonly bypassPullRequestAllowances: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference</a>

---

##### `bypassPullRequestAllowancesInput`<sup>Optional</sup> <a name="bypassPullRequestAllowancesInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowancesInput"></a>

```typescript
public readonly bypassPullRequestAllowancesInput: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances;
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

---

##### `dismissalTeamsInput`<sup>Optional</sup> <a name="dismissalTeamsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeamsInput"></a>

```typescript
public readonly dismissalTeamsInput: string[];
```

- *Type:* string[]

---

##### `dismissalUsersInput`<sup>Optional</sup> <a name="dismissalUsersInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsersInput"></a>

```typescript
public readonly dismissalUsersInput: string[];
```

- *Type:* string[]

---

##### `dismissStaleReviewsInput`<sup>Optional</sup> <a name="dismissStaleReviewsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput"></a>

```typescript
public readonly dismissStaleReviewsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeAdminsInput`<sup>Optional</sup> <a name="includeAdminsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdminsInput"></a>

```typescript
public readonly includeAdminsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireCodeOwnerReviewsInput`<sup>Optional</sup> <a name="requireCodeOwnerReviewsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput"></a>

```typescript
public readonly requireCodeOwnerReviewsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredApprovingReviewCountInput`<sup>Optional</sup> <a name="requiredApprovingReviewCountInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput"></a>

```typescript
public readonly requiredApprovingReviewCountInput: number;
```

- *Type:* number

---

##### `dismissalTeams`<sup>Required</sup> <a name="dismissalTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeams"></a>

```typescript
public readonly dismissalTeams: string[];
```

- *Type:* string[]

---

##### `dismissalUsers`<sup>Required</sup> <a name="dismissalUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsers"></a>

```typescript
public readonly dismissalUsers: string[];
```

- *Type:* string[]

---

##### `dismissStaleReviews`<sup>Required</sup> <a name="dismissStaleReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviews"></a>

```typescript
public readonly dismissStaleReviews: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeAdmins`<sup>Required</sup> <a name="includeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdmins"></a>

```typescript
public readonly includeAdmins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireCodeOwnerReviews`<sup>Required</sup> <a name="requireCodeOwnerReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews"></a>

```typescript
public readonly requireCodeOwnerReviews: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredApprovingReviewCount`<sup>Required</sup> <a name="requiredApprovingReviewCount" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount"></a>

```typescript
public readonly requiredApprovingReviewCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BranchProtectionV3RequiredPullRequestReviews;
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

---


### BranchProtectionV3RequiredStatusChecksOutputReference <a name="BranchProtectionV3RequiredStatusChecksOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer"></a>

```typescript
import { branchProtectionV3 } from '@cdktf/provider-github'

new branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetChecks">resetChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetContexts">resetContexts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetIncludeAdmins">resetIncludeAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetStrict">resetStrict</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChecks` <a name="resetChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetChecks"></a>

```typescript
public resetChecks(): void
```

##### `resetContexts` <a name="resetContexts" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetContexts"></a>

```typescript
public resetContexts(): void
```

##### `resetIncludeAdmins` <a name="resetIncludeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetIncludeAdmins"></a>

```typescript
public resetIncludeAdmins(): void
```

##### `resetStrict` <a name="resetStrict" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetStrict"></a>

```typescript
public resetStrict(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checksInput">checksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contextsInput">contextsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdminsInput">includeAdminsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strictInput">strictInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checks">checks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contexts">contexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdmins">includeAdmins</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strict">strict</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checksInput`<sup>Optional</sup> <a name="checksInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checksInput"></a>

```typescript
public readonly checksInput: string[];
```

- *Type:* string[]

---

##### `contextsInput`<sup>Optional</sup> <a name="contextsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contextsInput"></a>

```typescript
public readonly contextsInput: string[];
```

- *Type:* string[]

---

##### `includeAdminsInput`<sup>Optional</sup> <a name="includeAdminsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdminsInput"></a>

```typescript
public readonly includeAdminsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `strictInput`<sup>Optional</sup> <a name="strictInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strictInput"></a>

```typescript
public readonly strictInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `checks`<sup>Required</sup> <a name="checks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checks"></a>

```typescript
public readonly checks: string[];
```

- *Type:* string[]

---

##### `contexts`<sup>Required</sup> <a name="contexts" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contexts"></a>

```typescript
public readonly contexts: string[];
```

- *Type:* string[]

---

##### `includeAdmins`<sup>Required</sup> <a name="includeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdmins"></a>

```typescript
public readonly includeAdmins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `strict`<sup>Required</sup> <a name="strict" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strict"></a>

```typescript
public readonly strict: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BranchProtectionV3RequiredStatusChecks;
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

---


### BranchProtectionV3RestrictionsOutputReference <a name="BranchProtectionV3RestrictionsOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer"></a>

```typescript
import { branchProtectionV3 } from '@cdktf/provider-github'

new branchProtectionV3.BranchProtectionV3RestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetApps">resetApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetTeams">resetTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApps` <a name="resetApps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetApps"></a>

```typescript
public resetApps(): void
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetTeams"></a>

```typescript
public resetTeams(): void
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetUsers"></a>

```typescript
public resetUsers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.appsInput">appsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teamsInput">teamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.usersInput">usersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.apps">apps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teams">teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appsInput`<sup>Optional</sup> <a name="appsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.appsInput"></a>

```typescript
public readonly appsInput: string[];
```

- *Type:* string[]

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teamsInput"></a>

```typescript
public readonly teamsInput: string[];
```

- *Type:* string[]

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.usersInput"></a>

```typescript
public readonly usersInput: string[];
```

- *Type:* string[]

---

##### `apps`<sup>Required</sup> <a name="apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.apps"></a>

```typescript
public readonly apps: string[];
```

- *Type:* string[]

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* string[]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BranchProtectionV3Restrictions;
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

---



